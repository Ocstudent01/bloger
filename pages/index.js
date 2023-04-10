import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Format from '../layout/format'

//componentes
import Section1 from '../components/section1'
import Section2 from '../components/section2'
import Section3 from '../components/section3'
import Section4 from '../components/section4'
export default function Home() {
  return (
    // formato es del folder layout el cual muestra al header y al contenido principal
    <Format>
      {/* componente principal <main>Main Component</main>*/}
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
    </Format>
  )
}
