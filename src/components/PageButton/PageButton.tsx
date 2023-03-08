import styles from "./PageButton.module.scss";

interface Props {
  children: string,
  handleOnClick: Function;
}

function PageButton( {children, handleOnClick}: Props ) {
  return (
    <div className={styles.buttonContainer}>
      <button onClick={() => handleOnClick()}>{children}</button>
    </div>
  );
}

export default PageButton;
