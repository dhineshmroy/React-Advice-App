import { useEffect } from "react";
import { useState } from "react";
import "./Advice.css";

export const AdviceApp = () => {
  const [advice, setAdvice] = useState("Please Click button to Get an Advice");
  const [count, setCount] = useState(0);

  const getAdvice = async () => {
    try{
      const response = await fetch("https://api.adviceslip.com/advice");
      const result = await response.json();
      // console.log(result);
      setAdvice(result.slip.advice);
      setCount(count+1);
    }
    catch(err){
      console.error("Error fetching advice:", err);
    }
  }

  useEffect(() => {
    getAdvice();
  }, []);

  const Counter = (props) => {
    return (
      <p>You have read <b>{props.count}</b> pieces of advice</p>
    )
  }

  return (
    <>
      <div>
        <h2>{advice}</h2>
        <button onClick={getAdvice}>Get Advice</button>
        <Counter count = {count} />
      </div>
    </>
  );
};
