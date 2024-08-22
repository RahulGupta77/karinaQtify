import { CircularProgress } from '@mui/material';
import React from 'react';
import Tablet from '../BasicTabs/Tablet';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import styles from "./FilterSection.module.css";
// import audio from '/some path'

const FilterSection = ({type, title, value, filteredData, handleChangeIndex}) => {

    // function playSound(){
    //     let sound = new Audio(audio)
    //     sound.play()
    // }


  return (
    <div className={styles.wrapper}>
       
            <div className={styles.heading}>
               <h3>{title}</h3> 
            </div>
            <Tablet value={value} handleChangeIndex={handleChangeIndex} /> 
        {filteredData.length?(
                <div className={styles.cardsWrapper}>
                    <Carousel data={filteredData} renderCardComponent={(filteredData)=><Card data={filteredData} type={type}/>}/>
                </div>
        ):(
            <div className={styles.progressBar}>
                <CircularProgress/>
            </div>
        )}

    </div>
  )
}

export default FilterSection