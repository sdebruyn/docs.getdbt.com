import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';


function Card({ title, body, link, icon }) {
  const { colorMode } = useColorMode();

  // Set styles for icon if available in styles.module.css
  let imgClass = styles[icon] || ''

  return (
    <div className={styles.cardWrapper}>
      {link ? <Link
        to={useBaseUrl(link)}>
        <article className={styles.card}>
          {icon && <img
            src={colorMode === 'dark' ? `/img/icons/white/${icon}.svg` : `/img/icons/${icon}.svg`}
            alt=""
            className={`${styles.icon} ${imgClass}`} />}
          <h3>{title}</h3>
          <div
            className={styles.cardBody}
            dangerouslySetInnerHTML={{ __html: body }}
          ></div>
        </article>
      </Link> : <article className={styles.card}>
        {icon && <img
          src={colorMode === 'dark' ? `/img/icons/white/${icon}.svg` : `/img/icons/${icon}.svg`}
          alt=""
          className={`${styles.icon} ${imgClass}`} />}
        <h3>{title}</h3>
        <div
          className={styles.cardBody}
          dangerouslySetInnerHTML={{ __html: body }}
        ></div>
      </article>}
    </div>
  );
}

export default Card;

