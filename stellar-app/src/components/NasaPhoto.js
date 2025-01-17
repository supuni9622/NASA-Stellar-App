import React, {useState, useEffect, useCallback} from 'react';
import NavBar from './NavBar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Use to hide api key in .env file
const apiKey = process.env.REACT_APP_NASA_KEY;

const NasaPhoto = () => {

    const [photoData, setPhotoData] = useState(null);
    const [startDate, setStartDate] = useState('');

    const fetchPhoto = useCallback(async() => {

        let res;

        if(startDate !== ''){
            let formatted_date = startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" +  startDate.getDate()

            res = await fetch(`https://api.nasa.gov/planetary/apod?date=${formatted_date}&api_key=${apiKey}`);
        }else {
            res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
        }

           // Convert response to json type
           const data = await res.json();
           setPhotoData(data);

        },[setPhotoData,startDate]);

    useEffect(()=> {
        fetchPhoto();
    },[startDate])

    if(startDate !== ''){
        let formatted_date = startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" +  startDate.getDate()

        console.debug(formatted_date);
    }
    
    // Stop creating any error 
    if(!photoData) return <div/>;

    return (
        <>
         <NavBar/>
         <DatePicker 
            selected={startDate} 
            onChange={date => setStartDate(date)} 
            dateFormat="yyyy/MM/dd"
            placeholderText="Go to past images!!"
        />
            <div className='nasa-photo'>
                {photoData.media_type === 'image' ? 
                    <img src={photoData.url} alt={photoData.title} className='photo'/>
                : <iframe
                    title='space-video'
                    src={photoData.url}
                    frameBorder='0'
                    gesture='media'
                    allow='encrypted-media'
                    allowFullScreen
                    className='photo'
                />
            }
            <div>
                <h1>{photoData.title}</h1>
                <p className='date'>{photoData.date}</p>
                <p className='explanation'>{photoData.explanation}</p>
            </div>
        </div>
    </>
    )
}

export default NasaPhoto

// We can filter by date
// https://api.nasa.gov/planetary/apod?date=2020-12-01&api_key=6i6kl3OifEY4TLqvcA54GCvw0tyOZeq3VFvyQLaE
