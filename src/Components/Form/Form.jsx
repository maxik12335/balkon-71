// Components/Modal/Form.jsx
import Input from '../../Components/UI/Input/Input';
import FormBtn from '../UI/FormBtn/FormBtn';
import classes from './Form.module.css';
import { useState } from 'react';
import { formatPhone, formatName, validateForm } from '../../utils/form';

const Form = ({ onSubmit, close }) => {
  const [values, setValues] = useState({ name: '', phone: '' });
  const [isSent, setIsSent] = useState(false);

  const errors = validateForm(values);
  const isValid = (!errors.name && !errors.phone) && (values.name != '' && values.phone != '');

  const handleChange = (field, formatter) => (e) => {
    setValues((prev) => ({ ...prev, [field]: formatter(e.target.value) }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (errors.name || errors.phone) return;
    await onSubmit({
      name: values.name.trim(),
      phone: values.phone.replace(/\D/g, ''),
    });

    setIsSent(true);          // <-- ДОБАВИТЬ: показать «спасибо»
    setTimeout(close, 2500);  // <-- ДОБАВИТЬ: закрыть модалку через 2.5 сек
  };

  if (isSent) {
    return (
      <div className={classes.thanks}>
        <p className="h2">Спасибо !</p>
        <p className="text-sm">вам перезвонят через 5–10 минут</p>
      </div>
    );
  }


  return (
    <div>
      <p className={`${classes.text} text-base`}>в этом месяце скидка до 10 000 рублей</p>
      <form className={classes.form} onSubmit={handleFormSubmit}>
        <Input
          value={values.name}
          onChange={handleChange('name', formatName)}
          error={values.name ? errors.name : ''}
          placeholder="Имя"
          inputMode="text"
        />
        <Input
          value={values.phone}
          onChange={handleChange('phone', formatPhone)}
          error={values.phone ? errors.phone : ''}
          placeholder="+7 999 999 99 99"
          type="tel"
          inputMode="tel"
        />
        <FormBtn disabled={!isValid}>
          Отправить
        </FormBtn>
      </form>
    </div>
  );
};

export default Form;
