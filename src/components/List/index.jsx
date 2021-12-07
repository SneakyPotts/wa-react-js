import React from "react";
import ListItem from "../ListItem";


const List = ({data}) => {


 return (
     <React.Fragment>
         <h2>Some title page</h2>
      <ul>
        {data.map((elem, index) => (
          <ListItem
            num={index + 1}
            title={elem.title}
            text={elem.text}
            key={elem.id}
          />
        ))}
      </ul>
     </React.Fragment>
 )
}

export default List;