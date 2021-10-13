import PropTypes from "prop-types";
import s from "./FriendList.module.css";

export function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map((friend) => {
        return FriendItem(friend);
      })}
    </ul>
  );
}

function FriendItem({
  id,
  avatar = "https://www.pngegg.com/ru/png-kyspo",
  isOnline,
  name = "Anatoly",
}) {
  return (
    <li className={s.friendItem} key={id}>
      <span className={isOnline ? s.statusOnLine : s.statusOffLine}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendList.propType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ),
};
