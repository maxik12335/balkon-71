import classes from "./Navbar.module.css"
import MobileMenu from "../MobileMenu/MobileMenu";

import vk from '../../assets/navbar/vk.png'
import mail from '../../assets/navbar/mail.png'


const Navbar = () => {
  
  return (
   <div className={`${classes.navbar} line-dark`}>
      <div className="container-navbar">

        <div className={classes.desctopMenu}>
          <p className="text-base">Балкон 71</p>

          <div className={classes.right}>
            <a className="text-sm hover" href="tel:+74872791790">+ 7 487 279 17 90</a>
            <div className={classes.media}>
              <a className={`${classes.link} hover`} href="https://vk.com/balkon_tula71" target="_blank">
                <img className={classes.img} src={vk} alt="vk" />
              </a>
              <a className={`${classes.link} hover`} href="mailto:balkon_tula71@mail.ru" target="_blank">
                <img className={classes.img} src={mail} alt="mail" />
              </a>
            </div>
          </div>
        </div>

        <MobileMenu />

      </div>
    </div>
  )
}

export default Navbar;