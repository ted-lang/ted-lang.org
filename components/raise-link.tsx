import styles from './styles.module.css';

interface Props {
  title: string
  style: string
  link: string
};

function RaiseLink(props: Props) {
  return (
    <div className={styles.raise_text_container}>
      <a href={props.link} className={styles.raise_text_title + ' ' + props.style}>{props.title}</a>
    </div>
  );
}

export default RaiseLink;
