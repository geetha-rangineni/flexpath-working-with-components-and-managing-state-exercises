// import React, { useEffect, useState } from "react";
// import withLoading from "./withLoading";
// import UserList from "./UserList";

// const UserListWithLoading = withLoading(UserList);

// function App() {
//   const [users, setUsers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate fetching data
//     setTimeout(() => {
//       setUsers(["Alice", "Bob", "Charlie"]);
//       setIsLoading(false);
//     }, 2000); // Simulates network delay
//   }, []);

//   return (
//     <div>
//       <h1>Users</h1>
//       <UserListWithLoading isLoading={isLoading} users={users} />
//     </div>
//   );
// }

// export default App;




import "./App.css";
import React from "react";
import withLoading from "./hoc/withLoading";
import DataDisplay from "./hoc/DataDisplay";

function fetchData() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ message: "Hello, World!" }), 2000)
  );
}

const DataDisplayWithLoading = withLoading(DataDisplay, fetchData);

function App() {
  return (
    <div>
      <DataDisplayWithLoading />
    </div>
  );
}

export default App;

