import React from 'react';
import styles from './style.module.css';
function LayoutSection(props) {
  return (
    <section className={`${styles.layout} container mb-5 `}>
      <h1 className="mb-3 pt-4">{props.title}</h1>
      <div
        className={`d-flex flex-row flex-wrap gap-2 align-items-center justify-content-between ${styles.cards}`}
      >
        {props.children}
      </div>
    </section>
  );
}

export default LayoutSection;
