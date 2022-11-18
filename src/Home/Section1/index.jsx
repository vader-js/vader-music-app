import React from "react";
import Home from "../../images/Home.png";
import playlist from "../../images/playlist.png";
import radio from "../../images/radio.png";
import videos from "../../images/videos.png";
import profile from "../../images/profile.png";
import Vector from "../../images/Vector.png";
import wavy from "../../images/wavy.svg";
import mainartist from "../../images/mainartist.png";
import "./index.css";
import TopChats from "../topchats";
import { Avatars } from "../../Avatars";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { releases } from "../../SkeletonFrame/index.jsx";
import Catalogue from "../../catalogue";
// import Audioplayer from "../../AudioPlayer";

function Section1() {
  return (
    <div className="Totalwrapper">
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
      <div className="middlecontainer">
        <div className="section1wrapper">
          <div className="mainbanner">
            <div className="playlistshow">
              <h4 className="curatedplaylist">Curated playlist</h4>
              <div className="RnB">
                <h1 className="RnBheading">R & B Hits</h1>
                <p className="RnBparagraph">
                  All mine, lie again, petty call me everyday, Out of time, No
                  love, Bad habits, and so much more
                </p>
              </div>
              <span className="wavysvg1">
                <img src={wavy} alt="wavy" />
              </span>
              <div className="avatars">
                <Avatars />
                <div className="emoticons">
                  <FavoriteIcon />
                  <span className="likes">33K Likes</span>
                </div>
              </div>
            </div>
            <div className="mainbannerright">
              <img src={mainartist} alt="mainartist" className="bannerartist" />
              <span className="wavysvg">
                <img src={wavy} alt="wavy" />
              </span>
            </div>
          </div>
          <div className="sidemenu">
            <h2 className="menuheading">Top chats</h2>
            <div className="topchatsmenuwrapper">
              <ul className="topchatsmenu">
                <TopChats />
              </ul>
            </div>
          </div>
        </div>
         <div className="playcataloguewrapper">
        <div className="playcatalogue">           
          <div className="middlepanel">
            <h2 className="releases">New Releases</h2>
            <div className="cataloguewrapper">
              <div className="cataloguelist">
                {releases.map((list) => {
                  return (
                    <div className="catalogue" key={list.id}>
                      <img src={list.image} alt="" />
                      {list.about.map((lists, index) => {
                        return (
                          <div className="about" key={index}>
                            <h4 className="title">{lists.name}</h4>
                            <p className="artist">{lists.artist}</p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <>
          <Catalogue />
        </>
        </div>
      </div>
      <div className="rightmenu"></div>
    </div>
  );
}

export default Section1;
