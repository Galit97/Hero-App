import React, { FC } from 'react'
import {ArrowLeft} from "lucide-react";
import styles from './FormTitle.module.scss';
import { useNavigate } from 'react-router-dom';


export interface TitleProps{
    title:string;
    navRoute?: string;
}

const FormTitle:FC<TitleProps> = ({title,navRoute = "/"}) => {
  const navigate = useNavigate();
  return (
    <div className={styles.topNav}>
        <ArrowLeft size={30} color="#007bff" onClick={() => navRoute && navigate(navRoute)}/>
        <h3>{title}</h3>
    </div>
  )
}

export default FormTitle