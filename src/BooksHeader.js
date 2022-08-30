import './styles/books-header.scss';
import { css } from '@emotion/css'
import PersonComponent from "./PersonComponent";
import {useState} from "react";

const BooksHeader = () => {

  const [person, updatePerson] = useState({lastname: 'Musermann', firstname: 'Hans'});

  return (
    <>
      <header className={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      &:hover {
        color: white;
      }
    `}>
        Books header
        <PersonComponent lastname={person.lastname} firstname={person.firstname} />
      </header>
    </>
  );

}

export default BooksHeader;
