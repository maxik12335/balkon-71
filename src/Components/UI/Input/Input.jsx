import classes from './Input.module.css';

// const Input = ({ value, onChange, error, placeholder, type = 'text', inputMode }) => {
const Input = ({error, ...props}) => {
  return (
    <div className={classes.field}>
      <input
        className={`${classes.input} text-sm ${error ? classes.error : ''}`}
        {...props}
        // type={type}
        // inputMode={inputMode}
        // placeholder={placeholder}
        // value={value}
        // onChange={onChange}
      />
      {error && <span className={`${classes.errorText} text-sm`}>{error}</span>}
    </div>
  );
};

export default Input;
