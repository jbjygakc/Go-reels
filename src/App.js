import React from 'react'
import './App.css';
import VideoCard from './VideoCard.jsx';
import {useEffect,useState} from 'react';
import db from './components/FireBaseConfig/FirebaseConfig.js';



function App() {

  const [reels, setReels] = useState([])

  useEffect(() => {
    // App component will run once when  it loads 
    db.collection('reels').onSnapshot(snapshot => {

      setReels(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  return (
    <div className="app">
      
      <div className='app_top'>
        {/* image at_top */}
        <img  className='app_logo'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeG4lHnuYrqDmYMnKY1OuULieXku6ANmsOl94zM5hcdsmSv14JdTGX1DVP8sqhZWVtja0&usqp=CAU'
          alt='Reels'
        />
        <h1>Reels</h1>
        {/* reel text */}

      </div>
      <div className='app_videos'>
        {/* container of app videos(scroll contents) */}
        {/* videos */}
        {/* videos */}
        {reels.map(({channel,avatarsrc,song,url,likes,shares}) => (
          
          <VideoCard 
          channel ={channel}
          avatarsrc={avatarsrc}
          song={song}
          // url 3 ='https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4'
          // url 2='http://techslides.com/demos/sample-videos/small.webm'
          // url 4="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4" 
          url={url}
          likes={likes}
          shares={shares}
        />

        ))}
       
        
      </div>
    </div>
  );
}

export default App;


