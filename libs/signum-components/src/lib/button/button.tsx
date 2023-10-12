import styles from './button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  label: string;
  onSubmit: () => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps) {
  return (
    <div className={styles['container']}>
      <button
        className={styles['button']}
        style={props.style}
        onClick={props.onSubmit}
      >
        {props.label}
      </button>
    </div>
  );
}

export default Button;
