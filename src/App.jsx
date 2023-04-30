import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import transactions from "./components/TransactionHistory/transactions.json";
import {Profile} from "./components/Profile/Profile.jsx";
import friends from './components/FriendList/friends.json';
import {FriendList} from "./components/FriendList/FriendList.jsx";
import user from "./components/Profile/user.json";
function App() {
    return (
        <div>
            <TransactionHistory items={ transactions }/>
            <FriendList friends={friends}/>
            <Profile avatar={user.avatar} username={user.username} location={user.location} stats={user.stats} tag={user.tag}/>
        </div>
    );
}

export default App
