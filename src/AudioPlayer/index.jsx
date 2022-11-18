import React from "react";
import { songinfo } from "../SkeletonFrame";
import "./index.css";
import songimage from "../images/songimage.png";
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import PauseCircleRoundedIcon from '@mui/icons-material/PauseCircleRounded';

function Audioplayer({ songName, handlePlay, isplaying, progress}) {
  const image = songinfo
    .filter((filter) => filter.name === songName)
    .map((info) => info.image);

  return (
    <div className="footer">
      <div className="footerwrapper">
        <div className="audioparam">
          <div className="audioimage">
            {songName ? (
              <img src={image} alt="songcover" />
            ) : (
              <img src={songimage} alt="songcover" />
            )}
          </div>
          <h5 className="songname">
            {songName ? songName : "Seasons in- james"}
          </h5>
        </div>
        <div className="audiofunctions">
          <div className="topfunctions">
            <span className="shuffle">
              <ShuffleRoundedIcon />
            </span>
            <span className="previous">
              <SkipPreviousRoundedIcon />
            </span>
           {!isplaying? <span
              className="playbutton"
              onClick={handlePlay}
              style={{ fontSize: 35, color: " #FACD66" }}
            >
              <PlayCircleRoundedIcon fontSize="inherit" />
            </span>:  <span
              className="playbutton"
              onClick={handlePlay}
              style={{ fontSize: 35, color: " #FACD66" }}
            >
              <PauseCircleRoundedIcon fontSize="inherit" />
            </span>}           
            <span className="next">
              <SkipNextIcon />
            </span>
            <span className="repeat">
              <RepeatRoundedIcon />
            </span>
          </div>
          <div className="bottomfunction">
            <div className="progresswrapper">
              <div className="progressbar" style={{width: `${progress}%`}}></div>
            </div>
          </div>
        </div>
        <div className="volumefunction">
          <div className="volumeicon">
            <VolumeUpRoundedIcon fontSize="inherit" />
          </div>
          <div className="volumewrapper">
            <div className="volumebar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Audioplayer;
