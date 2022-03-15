import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Message from "./Message";
import Actions from "./Actions";


  function Tweet(props) {
    return (
      <div className="tweet">
        <ProfileImage image={props.tweet.user.image} />
      <div className="body">
        <div className="top">


          <User userData={props.tweet.user}/>
            {/* <span className="handle">@{props.tweet.user.handle}</span> */}
          <Timestamp time = {props.tweet.timestamp}/>
        </div>

        <Message message={props.tweet.message} />
        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;

