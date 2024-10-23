import styles from './Input.module.scss';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className, ...props }: IInputProps) => {
  return <input className={`${styles.input} ${className}`} {...props} />;
};

export default Input;
