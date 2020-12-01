import React, {useState, useEffect, useCallback} from 'react';
import NavBar from './NavBar';

// Use hided api key in .env file
const apiKey = process.env.REACT_APP_NASA_KEY;

const NasaPhoto = () => {

    const [photoData, setPhotoData] = useState(null);

    const fetchPhoto = useCallback(async() => {
           const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);

           // Convert response to json type
           const data = await res.json();
           setPhotoData(data);

        },[setPhotoData]);

    useEffect(()=> {
        fetchPhoto()
    },[])

    // Stop creating any error 
    if(!photoData) return <div/>;

    console.debug(photoData);

    return (
        <>
         <NavBar/>
            <div>
                {photoData.media_type === 'image' ? 
                    <img src={photoData.url} alt={photoData.title}/>
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
                <p>{photoData.date}</p>
                <p>{photoData.explanation}</p>
            </div>
        </div>
    </>
    )
}

export default NasaPhoto
