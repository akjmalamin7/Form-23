import { InputField, InputWrapper, LabelText } from "./inputStyled"
import style from "./input.module.css"
import { Text } from "../text"
const Input = ({ type, name, label, placeholder, size, message, radius, errors, onChange, onFocus, onBlur }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.label_wrapper}>
        <LabelText>{label}</LabelText>
      </div>
      <InputWrapper 
      className={style.input_wrapper}
      size={size}
      >
        <InputField
          type={type ? type : 'text'}
          name={name ? name : ''}
          placeholder={placeholder && placeholder}
          radius={radius}

          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          errors={errors}
        />
      </InputWrapper>
      {
        errors && <div className={style.error_message}>
          <Text color="error">{errors}</Text>
        </div>
      }
      {
        message && <div className={style.message}>
          <Text color="dark">{message}</Text>
        </div>
      }
    </div>
  )
}

export default Input