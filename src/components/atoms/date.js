import React, {useState, useEffect} from 'react';

export default function FooterDate() {

    const [date , setDate] = useState();

    const getYear = () =>  setDate(new Date().getFullYear())


    useEffect(() => {
        getYear();
    }, [])
  return (
    <>
     &copy; Nader Recycling OHG - {date}
    </>
  );
}