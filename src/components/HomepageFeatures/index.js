import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Organización por Materias',
    description: (
      <>
        Encuentra fácilmente el material académico organizado por áreas temáticas 
        y materias específicas. Todo el contenido está estructurado de manera lógica 
        y accesible.
      </>
    ),
  },
  {
    title: 'Recursos Completos',
    description: (
      <>
        Accede a apuntes, resúmenes, guías de estudio, trabajos prácticos resueltos 
        y material bibliográfico recomendado para cada materia.
      </>
    ),
  },
  {
    title: 'Colaboración Estudiantil',
    description: (
      <>
        Proyecto colaborativo donde los estudiantes pueden compartir y mejorar 
        el material académico, creando una comunidad de aprendizaje.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
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