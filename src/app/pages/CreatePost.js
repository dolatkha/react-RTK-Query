import { useNavigate } from "react-router-dom";

import { useAddPostMutation } from "../redux/services/postsApi";
import MovieForm from "./MovieForm";

const CreatePost = () => {
  const [addPost] = useAddPostMutation();
  const navigate = useNavigate();

  const onFormSubmit = async (name, description) => {
    await addPost({
      name: name,
      description: description,
    });
    navigate("/movies");
  };

  return (
    <div className="container">
      <MovieForm
        initialValue={{ name: "", description: "" }}
        onFormSubmit={onFormSubmit}
      />
    </div>
  );
};

export default CreatePost;
