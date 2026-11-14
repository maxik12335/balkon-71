import classes from './SectionForm.module.css';
import Form from '../../Components/Form/Form';
import Modal from '../../Components/Modal/Modal';
import Close from '../../Components/UI/Close/Close';
import { useState } from 'react';
import Btn from '../../Components/UI/Btn/Btn';

const SectionForm = () => {
  const [isOpen, setIsOpen] = useState();
  
    const handleSubmit = async (data) => {
      // Сюда только логика отправки, без стейтов формы
      console.log('Отправляем:', data);
    };

  return (
    <div className={`${classes.section} section line-dark`}>
      <div className={`${classes.container} container`}>
        <div className={classes.content}>

        <h3 className='h3'>
          Нужно остекление дома, дачи квартиры, ремонт балкона, лоджии или мебель под заказ ?
        </h3>
        <p className='text-base'>
          можете позвонить сами по номеру <a className={`${classes.tel} text-sm hover`} href="tel:+74872791790">+ 7 487 279 17 90</a> или оставить заявку и вам позвонят в ближайшее время
        </p>

        <Btn>оставить заявку</Btn>

          {isOpen &&
          <Modal>
            <Close onClick={() => setIsOpen(false)}/>

            <Form onSubmit={handleSubmit} close={() => setIsOpen(false)}/>
          </Modal>
        }
        </div>
      </div>
    </div>
  );
};

export default SectionForm;
