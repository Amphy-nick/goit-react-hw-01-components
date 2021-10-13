import PropTypes from "prop-types";

export function FriendList({ friends }) {
  return (
    <ul className="friend-list">
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
    <li className="item" key={id}>
      {/* <span className={isOnline ? isOnline : isOffline}></span> */}
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
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
