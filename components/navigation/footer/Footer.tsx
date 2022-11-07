import styles from './Footer.module.css';

export interface IFooter {}

const Footer: React.FC<IFooter> = () => {
  return (
    <div className={`bg-gray ml-1 ${styles.container}`}>
      <h1>FOOTER</h1>
    </div>
  );
};

export default Footer;
