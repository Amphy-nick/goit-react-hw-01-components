import "./App.css";
import user from "./Components/Profile/user.json";
import { Profile } from "./Components/Profile/Profile";
import statisticalData from "./Components/Statistics/statistical-data.json";
import { Statistics } from "./Components/Statistics/Statistics";
import friends from "./Components/FriendList/friends.json";
import { FriendList } from "./Components/FriendList/FriendList";
import transactions from "./Components/TransactionHistory/transaction-history.json";
import { TransactionHistory } from "./Components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <div className="App">
      <h2 className="title">Задание 1 - Профиль социальной сети</h2>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <h2 className="title">Задание 2 - Секция статистики</h2>
      <Statistics title="Upload stats" stats={statisticalData} />

      <h2 className="title">Задание 3 - Список друзей</h2>
      <FriendList friends={friends} />

      <h2 className="title">Задание 4 - История транзакций</h2>
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
