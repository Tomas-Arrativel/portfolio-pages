import styles from './navbar.module.css';
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { IoIosArrowDropdown } from 'react-icons/io';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_title}>
        <h2>Variety Haven</h2>
      </div>
      <div className={styles.navbar_search}>
        <input type='text' />
        <button>
          <AiOutlineSearch />
        </button>
      </div>
      <ul className={styles.navbar_list}>
        <li>
          Categories <IoIosArrowDropdown />
        </li>
        <li>My purchases</li>
        <li>Favourites</li>
        <li>
          <AiOutlineShoppingCart />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
