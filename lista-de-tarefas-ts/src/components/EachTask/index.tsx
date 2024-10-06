import { ITask } from "../../shares/ITask";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


interface EachTaskProps {
  toogleDone: (checkedTask: ITask) => void;
  task: ITask;
}

export default function EachTask({ task, toogleDone }: EachTaskProps) {
  return (
    <>
      <li className="eachTask">
        {task.description}
        <span>
          <div className="custom-checkbox">
            <input
              type="checkbox"
              className="icons__eachTask"
              id={task.id}
              onClick={() => toogleDone(task)}
            />
            <label htmlFor={task.id}></label>
          </div>
          <CgMoreVerticalAlt className="icon__dot" />
        </span>
      </li>
      <ul className="taskOptions" style={{display:'none'}}>
        <li><FaEdit size={16}/></li>
        <li><MdDelete /></li>
      </ul>
    </>
  );
}
