import { FC, useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchPeople } from "../../redux/peopleSlice";
import PersonCard from "../PersonCard/PersonCard";
import Loader from "../Loader/Loader";
import cl from "./PeopleList.module.css";

const PeopleList: FC = () => {
  const dispatch = useAppDispatch();
  const people = useAppSelector((state) => state.people.list);
  const search = useAppSelector((state) => state.search.value);
  const loading = useAppSelector((state) => state.people.loading);

  const sortedPeople = people.filter((item) => {
    return search.toLowerCase() == ""
      ? item
      : item.email.toLowerCase().includes(search) ||
          item.name.first.toLowerCase().includes(search);
  });

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  return (
    <div className={cl.main__list}>
      {loading ? (
        <Loader />
      ) : (
        <ul className={cl.ul__wrap}>
          {sortedPeople.map((person) => (
            <PersonCard {...person} key={person.phone} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default PeopleList;
