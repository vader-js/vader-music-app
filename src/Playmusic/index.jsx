import React from "react";
import Navbar from "../Navbar/navbar";
import "./index.css";
import "../Home/Section1/index.css";
import Home from "../images/Home.png";
import playlist from "../images/playlist.png";
import radio from "../images/radio.png";
import videos from "../images/videos.png";
import profile from "../images/profile.png";
import Vector from "../images/Vector.png";
import { useParams } from "react-router-dom";
import { songinfo, topchats } from "../SkeletonFrame";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Audioplayer from "../AudioPlayer";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";


function Playmusic() {
  let { id } = useParams();
  let filter = topchats.filter((chat) => chat.id === Number(id));
  let img = filter.map((chat) => chat.image);
  const [name, setName] = useState("");
  const [song, setsong] = useState(null);
  const [isplaying, setisplaying]= useState(false);
  const [progress, setprogress] = useState('');

  let audiocontrol = useRef(null);

  useEffect(() => {
    const selectsong = songinfo
      .filter((filter) => filter.name === name)
      .map((song) => song.source);
    setsong(selectsong);   
  }, [name]);

  useEffect(()=>{
    audiocontrol.current.play();
    setisplaying(true);
  },[song])

  useEffect(()=>{
    if(isplaying){
      audiocontrol.current.play();
    }else{
      audiocontrol.current.pause();
    }
  },[isplaying])

   const Handleplay= ()=>{
      setisplaying(!isplaying);
      console.log(isplaying);
    }

  const onPlaying=()=>{
    const duration = audiocontrol.current.duration;
    const currenttime = audiocontrol.current.currentTime;
    setprogress({"progress": currenttime / duration * 100, "length": duration})
  }

  const HandleClick = (e) => {
    e.preventDefault();
    let songName = e.target.innerText;
    setName(songName);
  };
  // process.env.PUBLIC_URL + "/Audio/Babydoll.mp3"
  // console.log(song)

  return (
    <div
      className="playmusicwrapper"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(16, 21, 25, 0.9), rgba(10, 15, 19, 1)),url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <div className="playmusic">
        <div className="sidelogos">
          <div className="innerlogo">
            <ul className="logolists">
              <li className="logolist">
                <img src={Home} alt="home" />
              </li>
              <li className="logolist">
                {" "}
                <img src={playlist} alt="playlist" />
              </li>
              <li className="logolist">
                {" "}
                <img src={radio} alt="radio" />{" "}
              </li>
              <li className="logolist">
                {" "}
                <img src={videos} alt="videos" />
              </li>
            </ul>
            <ul className="logolists2">
              <li className="logolist2">
                <img src={profile} alt="profile" />
              </li>
              <li className="logolist2">
                <img src={Vector} alt="vector" />
              </li>
            </ul>
          </div>
        </div>
        <div className="nowplaying">
          <div className="albumcover">
            <div className="albumimage">
              <img src={img} alt="album cover" />
            </div>
            <div className="albumcoverinfo">
              <h1>{filter.map((info) => info.about[0])}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                asperiores?
              </p>
              <p>64 songs - 16hrs+</p>
              <div className="playfunctions">
                <div className="play">
                  <PlayCircleFilledOutlinedIcon />{" "}
                  <span className="playall">Play all</span>
                </div>
                <div className="collection">
                  <LibraryMusicOutlinedIcon />{" "}
                  <span className="addcollection">Add to collection</span>
                </div>
                <div className="like">
                  <FavoriteOutlinedIcon />
                </div>
                <audio ref={audiocontrol} src={song} onTimeUpdate={onPlaying} />
              </div>
            </div>
          </div>
          <div className="selectsong">
            <ul className="selectsonglists">
              {songinfo.map((songs) => (
                <li key={songs.id} className="selectsonglist">
                  <div className="selectsongimage">
                    <img src={songs.image} alt="songtile" />
                  </div>
                  <div className="heart">
                    <FavoriteBorderOutlinedIcon />
                  </div>
                  <h3 className="name" onClick={HandleClick}>
                    {songs.name}
                  </h3>
                  <p className="genre">{songs.genre}</p>
                  <p className="time">{songs.time}</p>
                  <div className="more">
                    {" "}
                    <MoreVertOutlinedIcon />{" "}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <>
        <Audioplayer
          songName={name}
          isplaying={isplaying}
          handlePlay={Handleplay}
          progress={progress.progress}
        />
      </>
    </div>
  );
}

export default Playmusic;
