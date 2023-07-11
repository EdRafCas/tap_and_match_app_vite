import React,{useState, useEffect} from 'react';
import '../App.scss'
import './AnimationCheck'
import AnimationCheck from './AnimationCheck';
import AnimationWrong from './AnimationWrong';

const RightJigsaw = ({item, leftColumn, rightColumn, changeRightColumn,existingShuffledList2, changeExistingShuffledList2}) => {
      const [playWrong, changePlayWrong] = useState(false)


      useEffect(()=>{
            if(rightColumn.id === item.id && leftColumn.id === rightColumn.id && leftColumn.id !== undefined && rightColumn.id !== undefined){
                  console.log("they match")
                  /* changePlay(true) */
                  changeRightColumn("")
            } if(rightColumn.id === item.id && leftColumn.id !== rightColumn.id && leftColumn.id !== undefined && rightColumn.id !== undefined && rightColumn !== ""){
                  changePlayWrong(true)
                  console.log("picked but dont match")
                  setTimeout(()=>{
                        changePlayWrong(false)
                        console.log("timeright")
                  }, 1000)
                  changeRightColumn("")
            }

      },[leftColumn,rightColumn, item, existingShuffledList2, changeExistingShuffledList2, playWrong, changeRightColumn])

      const handleChange = ()=>{
            changeRightColumn(item);
      }

      const rightBlock = rightColumn.id === item.id ?
      'item-container green'
      :'item-container';

      return (    
      <div className={rightBlock} key={item.index} onClick={handleChange}>
            <div className='right-jigsaw'></div>
            <span>{/* {item.id}, */} {item.spanish}</span>
            {item.completed?
            <AnimationCheck item={item} rightColumn={rightColumn} rightside/>
            :
            ""}
            {playWrong?
            <AnimationWrong item={item} 
            rightColumn={rightColumn} 
            changePlayWrong={changePlayWrong}
            playWrong={playWrong}
            rightside/>
            :
            ""}
      </div>
       );
}
 
export default RightJigsaw;