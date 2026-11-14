import classes from './Btn.module.css'
import { NavLink } from 'react-router-dom';

const Btn = ({children, isColor='', link, ...props}) => {
  
  const STYLES = {
    dark: classes.dark,
    light: classes.light,
    navbar: classes.navbar,
    // только для этого фалйа
    btnForm: classes.btnForm
  }

console.log('MODULE KEYS:', Object.keys(classes));
  return (
    <NavLink className={`${classes.btn} ${STYLES[isColor]} text-sm`} to={link} {...props}>
      {children}
    </NavLink>
  )
}

export default Btn;