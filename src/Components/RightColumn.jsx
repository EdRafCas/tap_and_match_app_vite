import React,{useEffect} from 'react';
import RightJigsaw from './RightJigsaw';
import '../App.scss'


const RightColumn = ({existingShuffledList2,ShuffledList2,leftColumn,rightColumn,changeRightColumn,changeExistingShuffledList2}) => {



      useEffect(()=>{
            if(leftColumn.id === rightColumn.id && leftColumn.id !== undefined && rightColumn.id !== undefined){

            const updateexistingShuffledList2 = existingShuffledList2.map((listed)=>listed.id === rightColumn.id ? {...listed, completed:true}: listed)

            changeExistingShuffledList2(updateexistingShuffledList2)
            }
      
      },[rightColumn, leftColumn,changeExistingShuffledList2,existingShuffledList2])


      

      return (  
            <>
                  <div className='inner-container second-column'>
                        <>
                        {existingShuffledList2.map((item, index)=>{
                              return(
                                    <RightJigsaw key={index}
                                    item={item}
                                    ShuffledList2={ShuffledList2}
                                    leftColumn={leftColumn}
                                    rightColumn={rightColumn}
                                    changeRightColumn={changeRightColumn}
                                    existingShuffledList2={existingShuffledList2}
                                    changeExistingShuffledList2={changeExistingShuffledList2}
                                    />
                        )})}
                        </>
                  </div> 
            </>
      );
}
 
export default RightColumn;