import s from './style.module.css'
import { useState, useEffect } from 'react';
import { months, days } from '../../constants/data';

function CurrentDateTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000000);

    return () => clearInterval(intervalId);
  }, []);

  const fullDate = currentTime.getDate() + " " + months[currentTime.getMonth()+1] + " " + days[currentTime.getDay()];
  return (
    <h2 className={s.data}>{fullDate}</h2>
  );
}

export default CurrentDateTime;
