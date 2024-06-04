
import { ThreeDots } from 'react-loader-spinner';

import styles from './Loader.module.css';

const Loader = () => {
    
  return <ThreeDots wrapperClass={styles.spinner} color="#9768e0"/>;
};

export default Loader;
