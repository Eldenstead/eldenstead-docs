import React, {type KeyboardEvent, type ReactNode, useEffect, useMemo, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import searchIndex from '@site/src/data/searchIndex';
import styles from './styles.module.css';

const maxResults = 8;

function normalize(value: string) {
  return value.toLowerCase().trim();
}

export default function GitBookSearchNavbarItem(): ReactNode {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const value = normalize(query);
    if (!value) {
      return searchIndex.slice(0, maxResults);
    }

    const terms = value.split(/\s+/).filter(Boolean);
    return searchIndex
      .map((entry) => {
        const haystack = normalize(`${entry.title} ${entry.excerpt} ${entry.text}`);
        const score = terms.reduce((total, term) => {
          if (normalize(entry.title).includes(term)) {
            return total + 8;
          }
          if (normalize(entry.excerpt).includes(term)) {
            return total + 4;
          }
          return haystack.includes(term) ? total + 1 : total;
        }, 0);
        return {entry, score};
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
      .slice(0, maxResults)
      .map((item) => item.entry);
  }, [query]);

  useEffect(() => {
    function onKeyDown(event: globalThis.KeyboardEvent) {
      const isShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k';
      if (isShortcut) {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      window.setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  function handleInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && results[0]) {
      window.location.href = results[0].url;
    }
  }

  return (
    <>
      <button className={`${styles.searchButton} gitbook-search-button`} type="button" onClick={() => setOpen(true)}>
        <span className={styles.searchIcon} aria-hidden="true" />
        <span className={styles.searchLabel}>Search...</span>
        <span className={styles.shortcut} aria-hidden="true">
          <kbd>Ctrl</kbd>
          <kbd>K</kbd>
        </span>
      </button>
      {open && (
        <div className={styles.overlay} role="presentation" onMouseDown={() => setOpen(false)}>
          <section
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-label="Search documentation"
            onMouseDown={(event) => event.stopPropagation()}>
            <div className={styles.searchField}>
              <span className={styles.modalIcon} aria-hidden="true" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Search documentation..."
                aria-label="Search documentation"
              />
              <kbd>Esc</kbd>
            </div>
            <div className={styles.results}>
              {results.length > 0 ? (
                results.map((entry) => (
                  <Link
                    className={styles.result}
                    to={entry.url}
                    key={entry.url}
                    onClick={() => setOpen(false)}>
                    <strong>{entry.title}</strong>
                    <span>{entry.excerpt}</span>
                  </Link>
                ))
              ) : (
                <p className={styles.empty}>No matching docs found.</p>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
