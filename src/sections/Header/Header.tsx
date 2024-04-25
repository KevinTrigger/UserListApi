import { FC } from "react";
import { fetchPeople } from "../../redux/peopleSlice";
import { useAppDispatch } from "../../redux/hook";
import cl from "./Header.module.css";
import SearchInput from "../../components/SearchInput/SearchInput";
import { handleRemoveSearch } from "../../redux/searchSlice";

const Header: FC = () => {
  const dispatch = useAppDispatch();

  const onRefreshPage = () => {
    dispatch(handleRemoveSearch());
    dispatch(fetchPeople());
  };

  return (
    <header className={cl.header}>
      <SearchInput />
      <a className={cl.header__link} onClick={onRefreshPage}>
        Refresh Users
      </a>
    </header>
  );
};

export default Header;
