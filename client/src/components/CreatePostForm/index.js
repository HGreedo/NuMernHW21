import React, {useRef} from "react";
import { ADD_POST } from "../../utils/actions";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState";

const CreatePostForm = () => {
  const titleRef = useRef()
  const bodyRef = useRef()
  const authorRef = useRef()
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => { 
    e.preventDefault();
    API.savePost({author: authorRef.current.value, title: titleRef.current.value, body: bodyRef.current.value})
    .then((res) => {
      console.log(res)
      dispatch ({type: ADD_POST, post: res.data})
    }).catch((err) => {
      console.log(err)
    })
  };

  return (
    <div>
      <div className="jumbotron">
        <img
          className="img-fluid img-thumbnail"
          src="https://images.pexels.com/photos/459688/pexels-photo-459688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div>
      <h1>Create a blog post</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" ref={titleRef} required placeholder="Title" />
        <textarea className="form-control mb-5" ref={bodyRef} required placeholder="Body" />
        <input className="form-control mb-5" ref={authorRef} placeholder="Screen name" />
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Save Post
        </button>
      </form>
    </div>
  );
};

export default CreatePostForm;