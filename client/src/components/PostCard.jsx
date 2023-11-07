import { Link } from "react-router-dom";
import NoProfile from "../assets/NoProfile.png";
import moment from "moment";
import { useForm } from "react-hook-form";
import TextInput from "./TextInput";
import Loading from "./Loading";
import CustomButton from "./CustomButton";
import { postComments } from "../assets/data";

const PostCard = ({ post, user, deletePost, likePost }) => {
  const [showAll, setShowAll] = useState(0);
  const [showReply, setShowReply] = useState(0);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [replyComments, setReplyComments] = useState(0);
  const [showComments, setShowComments] = useState(0);

  return (
    <div className="mb-2 p-4 rounded-xl">
      <div className="flex gap-3 items-center mb-2">
        <Link to={"/profile/" + post?.userId?._id}>
          <img
            src={post?.userId?.profileURL ?? NoProfile}
            alt={post?.userId?.firstName}
            className="w-14 h-14 object-cover rounded-full"
          />
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
