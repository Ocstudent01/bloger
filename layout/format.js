import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";


export default function format({children}) {
  return (
    // <> reemplaza a la coma y al div
    <>
        {/* titulo o nombre general de la pagina */}
        <Head>
          <title>Blog</title>
        </Head>

        {/* encabezamiento de la pagina  */}
        <Header></Header>

        {/* contenido principal del componente */}
        <main>{children}</main>

        {/* pie de pagina  o parte inferior de la pagina */}
        <Footer></Footer>
    </>
  );
}
