import '../../../index.css';
import { AboutSection } from '../../AboutSection/AboutSection';

export const About = () => {
  return (
    <main className='ScrollType-skinny px-20 flex-1 overflow-y-scroll '>
      <AboutSection
        title="Formación y Especialización"
        content="Actualmente, estoy en mi 5to trimestre de estudio en el SENA, donde he estado ampliando mis conocimientos en desarrollo de software. Mi enfoque principal es el desarrollo frontend y tengo bases sólidas en ciberseguridad. Además, tengo experiencia en el desarrollo de aplicaciones Android con Kotlin y me desenvuelvo con soltura en el backend."
      />

      <AboutSection
        title="Metas y Enfoque"
        content="Soy un firme creyente en la importancia de completar las tareas y proyectos que inicio. Mis metas son efectivas y siempre me esfuerzo al máximo para alcanzarlas con dedicación y perseverancia."
      />

      <AboutSection
        title="Desafíos y Aprendizaje"
        content="Me encanta asumir nuevos desafíos y aprender constantemente. Cada obstáculo es una oportunidad para crecer y mejorar mis habilidades en el emocionante campo de la programación."
      />

      <AboutSection
        title="Contacto"
        content="¡Gracias por visitar mi página! Si tienes alguna pregunta o deseas conocer más sobre mi trabajo, no dudes en ponerte en contacto conmigo a través de mis redes sociales."
      />
    </main>
  );
};
