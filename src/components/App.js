import React, { useState } from 'react';
import InputArea from './InputArea';
import ListItem from './ListItem';



function App() {

  const [items, setItems] = useState([]);



  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  function handleChange(event) {
    setSearchItem(event.target.value);
  };

  React.useEffect(() => {
    const results = items.filter(item =>
      item.toLowerCase().includes(searchItem)
    );
    setSearchResults(results);
  }, [searchItem]);




  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });

    //setInputText("");
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });

  }



  return (
    <div className="App">
      <div>


        <input
          type="text"
          placeholder="Search item"
          value={searchItem}
          onChange={handleChange}
        />
      </div>
      <ul>
        {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>


      <InputArea onAdd={addItem} />


      <h3> List </h3>
      <ul>

        {items.map((listItem, index) => (

          <ListItem key={index} id={index} text={listItem}
            onDelete={deleteItem}

          //onChecked={checkItem}
          />

        ))}

      </ul>

    <br />
      <ul>
        <li>Search for an existing item using search bar</li>
        <li>add item to the list</li>
        <li>change style of an item by clicking on it</li>
      </ul>
    </div>
  );
}


export default App;


