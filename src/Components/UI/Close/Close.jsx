import classes from './Close.module.css'

const Close = ({spanColor, ...props}) => {
  return (
    <div className={classes.close} {...props}>
      <span style={{background: spanColor}}></span>
      <span style={{background: spanColor}}></span>
    </div>
  )
}

export default Close;