import React, {useState, useEffect} from 'react';
import CardList from '../CardList/CardList'

const UserList = () => {
    const [data, setData] = useState([]); 
    useEffect(() => {
     fetch("https://jsonplaceholder.typicode.com/users")
       .then(response => response.json())
       .then(response => { setData(response)})
   
   }, []);
    return (
      <div style={{ display: "flex",
       justifyContent: "center",
       flexWrap: "wrap"}}>
     
          {data.map(el => (
            <CardList el={el} key={el.id} />
          ))}
   
      </div>
    );
}

export default UserList;
