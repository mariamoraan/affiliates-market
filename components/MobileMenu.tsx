import HeartIcon from "@material-ui/icons/Favorite"
import HomeIcon from "@material-ui/icons/Home"
import ProfileIcon from "@material-ui/icons/Person"
import Link from 'next/link'
import { useRouter } from "next/router"
import { ReactNode } from "react"
import styles from "../styles/MobileMenu.module.css"

interface ILink {
    icon: ReactNode,
    link: string,
    name: string
}
export const MobileMenu = () => {
    const router = useRouter();
    return (
        <ul className={styles.menuWrapper}>
            <li className={router.pathname == '/likes' ? styles.activeLink : styles.link}><Link href="/likes"><HeartIcon /></Link></li>
            <li className={router.pathname == '/' ? styles.activeLink : styles.link}><Link href="/"><HomeIcon /></Link></li>
            <li className={router.pathname == '/profile' ? styles.activeLink : styles.link}><Link href="/"><ProfileIcon /></Link></li>
        </ul>
    )
}