import styles from './styles.module.scss'
import Link from 'next/link'

import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks'
import Image from 'next/image'

export function Header(){

  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })

  return(
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <Link href="/">
            <Image src="/logo.png" width={70} height={50} alt="logo"/>
          </Link>

          <nav className={styles.menuNav}>

            <div>
              <Button className={styles.menu} variant="contained" {...bindTrigger(popupState)}>
                Menu
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>{<Link href="/"> HOME </Link>}</MenuItem>
                <MenuItem onClick={popupState.close}>{<Link href="/cadastrar"> CADASTRAR </Link>}</MenuItem>

                <MenuItem onClick={popupState.close}>
                </MenuItem>
              </Menu>
            </div>

                
          </nav>

        </div>
      </header>
      <div className={styles.containerBanner}>
        <div className={styles.banner}>
          <h1>Pokemon GO</h1>
            <p> 
            Junte-se a Treinadores do mundo inteiro que estão descobrindo Pokémon conforme exploram o mundo a redor deles
            </p>
        </div>
      </div>
    </>
  )
}