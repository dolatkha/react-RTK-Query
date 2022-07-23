import { useNavigate } from "react-router-dom";
import { useDeletePostMutation } from "../redux/services/postsApi";

function Post(props) {
  const [deletePost] = useDeletePostMutation();
  const navigate = useNavigate();

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-8 col-12 mx-auto">
          <div className="card mb-3 shadow" key={props.post.id}>
            <div className="row g-0">
              <div className="col-md-12 col-12">
                <div className="card-body">
                  <h5 className="card-title">Name:{props.post.name}</h5>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-info"
                    onClick={() => {
                      navigate(`/movies/${props.post.id}`);
                    }}
                  >
                    View
                  </button>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      navigate(`/movies/edit/${props.post.id}`);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deletePost({ id: props.post.id })}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
