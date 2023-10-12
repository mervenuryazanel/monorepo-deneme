import styles from './signum-components.module.scss';

/* eslint-disable-next-line */
export interface SignumComponentsProps {}

export function SignumComponents(props: SignumComponentsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SignumComponents!</h1>
    </div>
  );
}

export default SignumComponents;
