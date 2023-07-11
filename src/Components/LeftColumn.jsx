import React,{useEffect} from 'react';
import LeftJigSaw from './LeftJigSaw';

import '../App.scss'


const LeftColumn = ({existingShuffledList,ShuffledList,leftColumn,rightColumn,changeLeftColumn,changeExistingShuffledList}) => {


      useEffect(()=>{


      if(leftColumn.id === rightColumn.id && leftColumn.id !== undefined &&      rightColumn.id !== undefined){

            const updateexistingShuffledList = existingShuffledList.map((listed)=>listed.id === leftColumn.id ? {...listed, completed:true}: listed)

            changeExistingShuffledList(updateexistingShuffledList)

            }
      
      },[leftColumn, rightColumn, existingShuffledList, changeExistingShuffledList])


      

      return (  
            <>
            <div className='inner-container first-column'>
                  <>
                  {existingShuffledList.map((item, index)=>{
                        return(
                              <LeftJigSaw key={index}
                                          item={item}
                                          ShuffledList={ShuffledList}
                                          leftColumn={leftColumn}
                                          rightColumn={rightColumn}
                                          changeLeftColumn={changeLeftColumn}
                                          existingShuffledList={existingShuffledList}/>
                  )})}
                  </>
            </div>
            </>
      );
}
 
export default LeftColumn;