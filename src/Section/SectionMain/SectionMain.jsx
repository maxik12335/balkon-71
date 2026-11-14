import classes from './SectionMain.module.css'
import img from '../../assets/main/1.png'
import Btn from '../../Components/UI/Btn/Btn'
import { useState } from 'react'
import Modal from '../../Components/Modal/Modal'
import Close from '../../Components/UI/Close/Close'
import Form from '../../Components/Form/Form'
import VideoHero from '../../Components/VideoHero/VideoHero'

const SectionMain = () => {
  const [isOpen, setIsOpen] = useState();

  const handleSubmit = async (data) => {
    // Сюда только логика отправки, без стейтов формы
    console.log('Отправляем:', data);
  };

  return (
    <div className={`${classes.section} section line-dark`}>
      <div className="container">
        <img className={classes.imgFon} src={img} />
        <div className={`${classes.content}`}>
          <h2 className='h1 line-dark-text'>Ремонт балконов и лоджий остекление в Туле</h2>

          <div className={classes.footer}>
            <p className='text-sm'>через 5-10 минут</p>
              <Btn onClick={() => setIsOpen(true)}>позвоним</Btn>
            </div>
        </div>

        {isOpen &&
          <Modal>
            <Close onClick={() => setIsOpen(false)}/>

            <Form onSubmit={handleSubmit} close={() => setIsOpen(false)}/>
          </Modal>
        }

      </div>
    </div>
  )
}

export default SectionMain;