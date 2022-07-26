import React from "react";
import { useDrop } from "react-dnd";
import Item from "./Item";
import ITEM_TYPE from "../../data/type";

function List({ items, status, onDrop }) {
  const [{ isOver }, dropRef] = useDrop({
    accept: ITEM_TYPE,
    drop: (item, monitor) => {
      onDrop(item, status, monitor);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  console.log(isOver);

  return (
    <div ref={dropRef}>
      {items
        .filter((i) => i.status === status)
        .map((i, idx) => {
          return (
            <Item
              key={i.id}
              item={i}
              index={idx}
              status={status}
              onDrop={onDrop}
            />
          );
        })}
    </div>
  );
}

export default List;
