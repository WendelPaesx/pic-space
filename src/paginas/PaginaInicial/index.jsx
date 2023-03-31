import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import Banner from "../../componentes/Cabecalho/Banner"; 
import styles from "./paginaInicial.module.scss"

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main className={styles.Menu}>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>

            </main>

        </>

    )
}