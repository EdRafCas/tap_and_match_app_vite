import React,{useState, useEffect} from 'react';
import '../App.scss'
import './AnimationCheck'
import AnimationCheck from './AnimationCheck';
import AnimationWrong from './AnimationWrong';



const LeftJigSaw = ({item, leftColumn, rightColumn, changeLeftColumn,existingShuffledList, changeExistingShuffledList}) => {
      const [playWrong2, changePlayWrong2] = useState(false)


      useEffect(()=>{
            if(leftColumn.id === item.id && leftColumn.id === item.id && leftColumn.id === rightColumn.id && leftColumn.id !== undefined){
                  console.log("they match")
                  /* changePlay(true) */
                  changeLeftColumn("")
            } if(leftColumn.id === item.id && leftColumn.id !== rightColumn.id && leftColumn.id !== undefined && rightColumn.id !== undefined && leftColumn !== ""){
                  changePlayWrong2(true)
                  console.log("picked but dont match")
                  setTimeout(()=>{
                        changePlayWrong2(false)
                        console.log("timerleft")
                  }, 1000)
                  changeLeftColumn("")
            }
          
      },[leftColumn,rightColumn, changeLeftColumn, item, changeExistingShuffledList, existingShuffledList, playWrong2])

      const handleChange = ()=>{
            changeLeftColumn(item);
      }


      const leftBlock = leftColumn.id === item.id ?
      'item-container green'
      :'item-container';



      return (    
      <div className={leftBlock} key={item.index} onClick={handleChange}>
            <div className='left-jigsaw'></div>
            <span>{/* {item.id}, */} {item.english}</span>
            {item.completed?
            <AnimationCheck item={item}/>
            :
            ""}
            {playWrong2?
            <AnimationWrong item={item} 
            leftColumn={leftColumn} 
            playWrong2={playWrong2}
            changePlayWrong2={changePlayWrong2}
            />
            :
            ""}
            
      </div>
       );
}
 
export default LeftJigSaw;