import { FC } from "react";
import { useAppSelector } from "../../redux/hook";
import cl from "./Aside.module.css";

enum Gender {
  Male = "male",
  Female = "female",
}

export const Aside: FC = () => {
  const people = useAppSelector((state) => state.people.list);

  return (
    <div className={cl.aside}>
      <h3 className={cl.aside__title}>{people.length} Users</h3>
      <hr />
      <div className={cl.aside__block}>
        <h4 className={cl.block__title}>Age Groups</h4>
        <div className={cl.block__subtitle}>
          11 to 20
          <span className={cl.block__value}>
            {
              people.filter(
                (person) => person.dob.age >= 11 && person.dob.age <= 20
              ).length
            }{" "}
            users
          </span>
        </div>
        <div className={cl.block__subtitle}>
          21 to 30
          <span className={cl.block__value}>
            {
              people.filter(
                (person) => person.dob.age >= 21 && person.dob.age <= 30
              ).length
            }{" "}
            users
          </span>
        </div>
        <div className={cl.block__subtitle}>
          31 to 40
          <span className={cl.block__value}>
            {
              people.filter(
                (person) => person.dob.age >= 31 && person.dob.age <= 40
              ).length
            }{" "}
            users
          </span>
        </div>
        <div className={cl.block__subtitle}>
          41 to 50
          <span className={cl.block__value}>
            {
              people.filter(
                (person) => person.dob.age >= 41 && person.dob.age <= 50
              ).length
            }{" "}
            users
          </span>
        </div>
        <div className={cl.block__subtitle}>
          51+
          <span className={cl.block__value}>
            {people.filter((person) => person.dob.age >= 51).length} users
          </span>
        </div>
        <hr />
        <h4 className={cl.block__title}>Gender Groups</h4>
        <div className={cl.block__subtitle}>
          Male
          <span className={cl.block__value}>
            {people.filter((person) => person.gender === Gender.Male).length}{" "}
            users
          </span>
        </div>
        <div className={cl.block__subtitle}>
          Female
          <span className={cl.block__value}>
            {people.filter((person) => person.gender === Gender.Female).length}{" "}
            users
          </span>
        </div>
      </div>
    </div>
  );
};
