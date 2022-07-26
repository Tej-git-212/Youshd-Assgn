import React, { useRef, useState } from "react";
import profile from "../../assets/profile.png";
import comment from "../../assets/comment.png";
import Card from "../UI/Card";
import { useDrag, useDrop } from "react-dnd";
import ITEM_TYPE from "../../data/type";
import Window from "../UI/Window";

function Item({ item, index, status, onDrop }) {
  const [{ isDragging }, dragRef] = useDrag({
    type: ITEM_TYPE,
    item: { ...item, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, dropRef] = useDrop({
    accept: ITEM_TYPE,
    drop: (item, monitor) => {
      onDrop(item, status, monitor);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const ref = useRef(null);
  const dragDropRef = dragRef(dropRef(ref));

  const [show, setShow] = useState(false);
  const onOpen = () => setShow(true);
  const onClose = () => setShow(false);

  return (
    <Card
      key={item.id}
      style={{ opacity: isDragging ? 0 : 1 }}
      onClick={onOpen}
    >
      <li
        className="item"
        ref={dragDropRef}
        draggable
        onClick={onOpen}
        style={{ backgroundColor: isDragging ? "#fb3" : "" }}
      >
        <p className="item-title">{item.title}</p>
        <p className="item-decs">{item.desc}</p>
        <div>
          <img src={profile} alt={item.title} />
          <img src={comment} alt="comment" className="item-pic" />
        </div>
      </li>
      <Window item={item} onClose={onClose} show={show} />
    </Card>
  );
}

export default Item;
