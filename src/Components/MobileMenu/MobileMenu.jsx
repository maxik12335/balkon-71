import { NavLink } from 'react-router-dom'
import Modal from '../Modal/Modal'
import Close from '../UI/Close/Close'
import { NAV_LINKS } from '../../data/links'
import classes from './MobileMenu.module.css'
import { useState } from 'react'
import Burger from '../UI/Burger/Burger'
import vk from '../../assets/navbar/vk.png'
import mail from '../../assets/navbar/mail.png'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>

      <div className={classes.burgerBox}>
        <p className="text-base">Балкон 71</p>
        <Burger onClick={() => setIsOpen(true)} />
      </div>

      {isOpen && 
        <Modal onClick={() => setIsOpen(null)}>
          <div className={classes.mobyleMenu}>
            <div className={classes.header}>
              <p className="h3">Балкон 71</p>
              <Close onClick={() => setIsOpen(null)} />
            </div>

            <div className={classes.footer}>
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
        </Modal>
      }

    </div>
  )
}

export default MobileMenu
