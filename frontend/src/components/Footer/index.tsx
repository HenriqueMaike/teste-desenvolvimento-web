import styles from './styles.module.scss'

export function Footer(){

    const data = new Date();
    const ano = data.getFullYear(); 

    return(
        <footer>
            <div className={styles.containerFooter}>
                <div className={styles.informacoesFooter}>
                    <p>{ano} - Henrique Maike</p>
                    <p>Termos de Privacidade</p>
                </div>
            </div>
        </footer>
    )
}