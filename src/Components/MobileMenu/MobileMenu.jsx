import { NavLink } from 'react-router-dom'
import Modal from '../Modal/Modal'
import Close from '../UI/Close/Close'
import { NAV_LINKS } from '../../data/links'
import classes from './MobileMenu.module.css'
import { useState } from 'react'
import Burger from '../UI/Burger/Burger'
import vk from '../../assets/navbar/vk.png'
import mail from '../../assets/navbar/mail.png'
import { useNavColor } from "../../utils/navbar";
import mainFon from '../../assets/main/1.png'
import Btn from '../UI/Btn/Btn'
import Form from '../Form/Form'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenForm, setIsOpenForm] = useState(false)
  const { navColor, textColor } = useNavColor()


      const handleSubmit = async (data) => {
      // Сюда только логика отправки, без стейтов формы
      console.log('Отправляем:', data);
    };
  return (
    <div>

      <div className={classes.burgerBox} >
        <p className="text-base" style={{ color: textColor }}>Балкон 71</p>
        <Burger onClick={() => setIsOpen(true)} />
      </div>

      {isOpen && 
        <Modal onClick={() => setIsOpen(null)}>
          <img className={classes.imgFon} src={mainFon} alt="" />
          <div className={classes.mobyleMenu}>
            <div className={classes.header}>
              <p className="text-base">Балкон 71</p>
              <Close onClick={() => setIsOpen(null)} style={{ position: 'relative', right: '0', top: '0'}} spanColor={'white'}/>
            </div>

            <div className={classes.texts}>
              <p className='h3'>Ремонт</p>
              <p className='h3'>Остекление</p>
              <p className='h3'>Мебель</p>
              <Btn onClick={() => setIsOpenForm(true)}>оставить заявку</Btn>

              {isOpenForm &&
                <Modal>
                  <Close onClick={() => setIsOpenForm(false)}/>

                  <Form onSubmit={handleSubmit} close={() => setIsOpenForm(false)}/>
                </Modal>
              }
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
