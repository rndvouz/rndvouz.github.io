import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: null, 
    description: (
      <>
       With a simple swipe interface, our app allows you to swap clothes with other
       effortlessly, helping to create a sustainable and cost-effective way to refresh your wardrobe.
      </>
    ),
  },
  {
    title: 'Join RNDVOUZ',
    Svg: null,
    description: (
      <>
        Join a vibrant community of style-conscious individuals looking to revamp their closets.
        Discover new pieces to elevate your personal style.
      </>
    ),
  },
  {
    title: 'Consign your clothes',
    Svg: null,
    description: (
      <>
        Easily consign your gently worn clothes with local thrift shops,
        supporting both your wallet and the environment.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
