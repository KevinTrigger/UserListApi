import React, { FC } from 'react'
import {ReactComponent as Spinner} from '../../assets/Spinner.svg';
import cl from './Loader.module.css';

const Loader: FC = () => {
  return (
    <div className={cl.spinner__wrap}>
      <Spinner classNames={cl.spinner__icon}/>
    </div>
  )
}

export default Loader