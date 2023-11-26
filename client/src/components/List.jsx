import "../assets/css/main.css";
import ItemList from "./ItemList";
import "../assets/css/responsive.css"

export default function List(props) {
  return (
    <ul>
      {props.tasks.map((task) => (
        <ItemList
          deleteItem={props.deleteItem}
          editItem={props.editItem}
          key={task.id}
          name={task.task}
          index={task.id}
        />
      ))}
    </ul>
  );
}
