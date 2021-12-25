import React from "react";
import "./Photos.css";

const Photos = (props) => {
  // console.log(props.photos);

  if (props.photos) {
    return (
      <>
        <div className="card">
          <div className="card-body">
            {" "}
            <div className="container">
              {/* <div className="row">
                <div className="col"> */}
              <div className="photos">
                {props.photos.map(function (photos, index) {
                  return (
                    <div className="col-4" key={index}>
                      <a
                        href={photos.src.original}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={photos.src.tiny} className="pics img-fluid" />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* </div>
        </div>{" "} */}
      </>
    );
  } else {
    return null;
  }
};

export default Photos;
