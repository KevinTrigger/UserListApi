import { ChangeEvent, FC, useState } from "react";
import cl from "./SearchInput.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { handleChangeSearch } from "../../redux/searchSlice";

const SearchInput: FC = () => {
  const inputValue = useAppSelector((state) => state.search.value);
  const dispatch = useAppDispatch();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(handleChangeSearch(e.target.value));
  };

  return (
    <input
      className={cl.header__input}
      type="text"
      placeholder="Search"
      value={inputValue}
      onChange={handleChangeInput}
    />
  );
};

export default SearchInput;
