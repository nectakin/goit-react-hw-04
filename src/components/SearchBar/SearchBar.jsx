import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import { IoIosSearch } from 'react-icons/io';

import styles from './SearchBar.module.css';

const notify = () => toast.error('Search query cannot be empty!');
const toasterOptions = {
  error: {
    style: {
      background: 'brown',
      color: 'white',
    },
  },
};

const SearchBar = ({ onSearch }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.search.value.trim();

    if (searchQuery === '') {
      notify();
      return;
    }

    onSearch(searchQuery);
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleFormSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          name="search"
        />
        <button type="submit" className={styles.buttonSearch}>
          <IoIosSearch className={styles.searchIcon} />
        </button>
      </form>
      <Toaster position="top-left" toastOptions={toasterOptions} />
    </header>
  );
};
export default SearchBar;

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};