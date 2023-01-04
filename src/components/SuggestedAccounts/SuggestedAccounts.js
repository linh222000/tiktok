import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounted({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('see-more')}>See all</p>
        </div>
    );
}
SuggestedAccounted.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SuggestedAccounted;
