import classes from './FormBtn.module.css'

const FormBtn = ({children, ...props}) => {

  return (
    <button className={`${classes.btn} text-sm`} type="submit" {...props}>
      {children}
    </button>
  )
}

export default FormBtn;