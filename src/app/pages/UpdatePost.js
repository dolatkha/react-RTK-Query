import { useNavigate, useParams } from "react-router-dom";
import { useEditPostMutation, usePostQuery } from "../redux/services/postsApi";

import MovieForm from "./MovieForm";

function PostUpdate() {
  const navigate = useNavigate();
  const { movieId } = useParams();

  const [editPost] = useEditPostMutation();
  const {
    data: movieToEdit,
    error,
    isError,
    isLoading,
    isSuccess,
  } = usePostQuery(movieId);

  const onFormSubmit = async (name, description) => {
    await editPost({
      id: movieId,
      name: name,
      description: description,
    });
    navigate("/movies");
  };

  return (
    <div>
      <div>{isLoading && "Loading..."}</div>
      <div>{isError && error}</div>
      {isSuccess && movieToEdit && (
        <MovieForm
          onFormSubmit={onFormSubmit}
          initialValue={{
            name: movieToEdit && movieToEdit.name,
            description: movieToEdit && movieToEdit.description,
          }}
        />
      )}
    </div>
  );
}

export default PostUpdate;
