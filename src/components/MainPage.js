import React,{useState} from 'react'
import classes from "./MainPage.module.css";
const Percent=()=>{
    return (
    <div className={classes.percent}>
    </div>)
}

const Temp=({data})=>{
    return (
        <div className={classes.eachBox}>
            {data}
        </div>
    )
}

const Box=({percent})=>{ 
    let eachPercent=[]
    for (let index = 0; index < percent; index++) {
            eachPercent.push(<Percent/>)
    }
    return <Temp data={eachPercent}/>;
}

const ProgressBar=({allBoxes})=>{
    return(
    <>
        <div className={classes.progressBar}>{allBoxes}</div>
    </>
    );
}




const MainPage = () => {
    const [percentage,setPercentage]=useState(0);
    const [input,setInput]=useState(0);
   
  return (
    <>

    <div>
      <span>Enter the percent you want in progress bar :</span>
      <input type="number" value={input} onChange={(e)=>{setInput(e.target.value)}} onKeyDown={(e)=>{
        if(e.key=="Enter"){
            setPercentage(input);
        }
      }}></input>
    </div>

    <div>
      {(()=>{
        let totalPercent=percentage;
        let progressBar=[];
        for (let i = 0; i < 5; i++) {
            if(totalPercent>=20){
                progressBar.push(<Box percent={20}/>);
                totalPercent-=20;
            }
            else{
                progressBar.push(<Box percent={totalPercent}/>);
                totalPercent=0;
            }
        }
        return <ProgressBar allBoxes={progressBar}/>;
      })()}
    </div>
  
    </>
  )
}

export default MainPage
