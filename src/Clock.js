import {useEffect, useState} from "react";

const Clock = () => {

  const [timestampValue, setTimestampValue] = useState('');

  // setInterval and call it every second
  useEffect(() => {
    setInterval(() => {
      setTimestampValue(getDate());
    } , 1000);
  }, []);

  function getDate () {
    const date = new Date(Date.now());
    const dateString = "Date: "+date.getDate()+
    "/"+(date.getMonth()+1)+
    "/"+date.getFullYear()+
    " "+date.getHours()+
    ":"+date.getMinutes()+
    ":"+date.getSeconds();
    return dateString;
  }

  return (
    <>
      { timestampValue }
    </>
  );

}

export default Clock;
