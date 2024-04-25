import { FC } from "react";
import PeopleList from "../../components/PeopleList/PeopleList";
import cl from "./Main.module.css";

const Main: FC = () => {
  return (
    <main className={cl.main}>
      <PeopleList />
    </main>
  );
};

export default Main;
