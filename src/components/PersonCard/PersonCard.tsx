import { Person } from "../../types/types";
import { useAppDispatch } from "../../redux/hook";
import { setActivePerson } from "../../redux/peopleSlice";
import TrashIcon from "../TrashIcon/TrashIcon";
import cl from "./PersonCard.module.css";

const PersonCard = ({
  dob,
  email,
  location,
  name,
  phone,
  picture,
  isActive = false,
}: Person) => {
  const dispatch = useAppDispatch();

  const handleActiveCard = () => {
    dispatch(setActivePerson(email));
  };

  return (
    <li
      onClick={handleActiveCard}
      key={phone}
      className={isActive ? cl.ul__card_active : cl.ul__card}
    >
      <div className={cl.card__header}>
        <img className={cl.card__avatar} src={picture.large} alt="avatar" />
        <div className={cl.card__bio}>
          <span className={isActive ? cl.card__name_active : cl.card__name}>
            {name.first} {name.last}
          </span>
          <span className={cl.card__email}>{email}</span>
        </div>
        {isActive ? <TrashIcon /> : ""}
      </div>
      <div className={cl.card__data}>
        <div className={cl.data__item}>
          <p className={cl.data__title}>Phone No</p>
          <p className={cl.data__value}>{phone}</p>
        </div>
        <div className={cl.data__item}>
          <p className={cl.data__title}>Birthday</p>
          <p className={cl.data__value}>{dob.date}</p>
        </div>
        <div className={cl.data__item}>
          <p className={cl.data__title}>Address</p>
          <p className={cl.data__value}>
            {location.city}, {location.state}, {location.country}
          </p>
        </div>
      </div>
    </li>
  );
};

export default PersonCard;
