import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <Header classNames={cx('header')}>
            <button classNames={cx('back-btn')} onclick={onBack}>
                <FontAwesomeIcon icon={faChevronCircleLeft} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </Header>
    );
}

export default Header;
