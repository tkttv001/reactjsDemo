import React from "react";
import { useState } from "react";
import Todo from "../../components/Todo/Todo";

export default function Home() {
  const list = [
    { name: "one", id: 1 },
    { name: "one", id: 2 },
    { name: "one", id: 3 },
    { name: "one", id: 4 },
    { name: "one", id: 5 },
    { name: "one", id: 6 },
  ];

  const [listItem, setistItem] = useState(list);
  const selectedItemHandle = (data) => {
    let temp = listItem.filter((item) => item.id !== data.id);
    setistItem(temp);
  };
  return (
    <div>
      <div>my todo </div>
      <div className="container">
        <div className="row w-100 gap-3">
          {listItem.map((item, i) => {
            return (
              <Todo
                key={i}
                item={item}
                selectedItemHandle={selectedItemHandle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
