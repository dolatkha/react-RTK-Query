import { useParams } from "react-router-dom";
import { usePostQuery } from "../redux/services/postsApi";

function PostDetails() {
  const { movieId } = useParams();

  const {
    data: movie,
    error,
    isError,
    isLoading,
    isSuccess,
  } = usePostQuery(movieId);

  return (
    <div className="container mt-3">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-12 col-12">
            <div>{isLoading && "Loading..."}</div>
            <div>{isError && error}</div>
            {isSuccess && movie && (
              <span>
                <div className="card-body">
                  <h3 className="card-title">Name:{movie.name}</h3>
                </div>
                <div className="card-footer">
                  <p className="card-text">Description: {movie.description}</p>
                </div>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
