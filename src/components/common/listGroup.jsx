import React from "react";
const ListGroup = (props) => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedList,
  } = props;
  console.log(selectedList);
  return (
    <div>
      <h4 className="m-5">Movie Genres</h4>

      <ul class="list-group">
        {items.map((item) => (
          <li
            className={
              item === selectedList
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onItemSelect(item)}
            key={item[valueProperty]}
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    </div>
  );
};

ListGroup.defaultProps = {
  //default props can be overrriden if input to list groupd does not contain name or id values.!!
  //they still needs to be added in the object destructuring!
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
