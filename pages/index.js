import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import Reply from "../components/Reply";
import { comments } from "../libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto bg-white p-3 rounded rounded-3 shadow-sm"
      >
        {/* PostOwner Example*/}

        <PostOwner
          user={"Pasakorn Sintao 640610658"}
          Like={100}
          postText={"Quiz ยากจังเลยครับ ของ่ายๆ กว่านี้ได้ไหม #261207"}
          img={"/my.jpg"}
        />
        {comments.map((x, i) => (
          <Comment
            username={x.username}
            comText={x.commentText}
            like={x.likeNum}
            userimg={x.userImagePath}
            key={i}
            replieuser={x.replies}
          />
        ))}
        {/* Comment Example */}

        {/* Reply Example */}
      </div>
    </div>
  );
}
