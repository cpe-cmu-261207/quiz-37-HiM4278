import React from "react";
import Reply from "./Reply";

export default function Comment(props) {
  const reply = props.replieuser;

  return (
    <div>
      {/* Entire Comment div */}
      <div className="d-flex gap-2 my-2">
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
          <span className="fw-semibold">{props.username}</span>
          <br />
          <span>{props.comText}</span>
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

      {/*render Reply here... */}
      {reply.map((x, i) => (
        <Reply
          repliename={x.username}
          replieText={x.replyText}
          like={x.likeNum}
          userimg={x.userImagePath}
          key={i}
        />
      ))}
    </div>
  );
}
