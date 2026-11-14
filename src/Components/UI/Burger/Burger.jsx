import classes from './Burger.module.css'
import { useNavColor } from "../../../utils/navbar";

const Burger = ({...props}) => {
  const { navColor, textColor } = useNavColor()
  return (
    <div className={classes.burger} {...props}>
      <span style={{ backgroundColor: textColor }}></span>
      <span style={{ backgroundColor: textColor }}></span>
      <span style={{ backgroundColor: textColor }}></span>
    </div>
  )
}

export default Burger;