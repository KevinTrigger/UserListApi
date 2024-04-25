import { FC } from "react";
import TrashSVG from "../../assets/Trash.svg";
import cl from "./TrashIcon.module.css";
import { useAppDispatch } from "../../redux/hook";
import { onDeletePerson } from "../../redux/peopleSlice";

const TrashIcon: FC = () => {
  const dispatch = useAppDispatch();

  const handleDeletePerson = () => {
    dispatch(onDeletePerson());
  };

  return (
    <img
      src={TrashSVG}
      className={cl.card__icon}
      alt="icon"
      onClick={handleDeletePerson}
    />
  );
};

export default TrashIcon;
