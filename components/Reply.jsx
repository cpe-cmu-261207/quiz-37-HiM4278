import React from "react";

export default function Reply(props) {
  return (
    <div>
      <div className="d-flex gap-2 my-2 ps-5">
        <img
          src={props.userimg}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#E5E7EB" }}
        >
          <span className="fw-semibold">{props.repliename}</span>
          <br />
          <span>{props.replieText}</span>
          <div className="d-flex align-items-center gap-1">
            <span>
              {props.like <= 0 ? false : <img src="/like.svg" width={20}></img>}
            </span>
            {props.like <= 0 ? (
              false
            ) : (
              <span className="text-muted">{props.like} คน</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
