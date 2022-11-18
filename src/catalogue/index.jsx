import React from 'react';
import { releases } from "../SkeletonFrame/index.jsx";


function Catalogue() {
  return (
    <div className="playcatalogue">
    <div className="leftpanel"></div>
    <div className="middlepanel">
      <h2 className="releases">Popular in your area</h2>
      <div className="cataloguewrapper">
      <div className="cataloguelist cat">
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
    <div className="rightmenu"></div>
  </div>
  )
}

export default Catalogue;
