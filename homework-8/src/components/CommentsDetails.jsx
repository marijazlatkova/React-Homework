import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const CommentsDetails = () => {
  const navigate = useNavigate();
  const [commentsDetails, setCommentsDetails] = useState({});
  const [edit, setEdit] = useState(false);
  const [newText, setNewText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((res) => {
        setCommentsDetails(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.message);
      });
  }, [id]);

  async function updateItems(newText) {
    try {
      setIsLoading(true);
      const updatedComment = {
        ...commentsDetails,
        body: newText,
      };
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/comments/${id}`,
        updatedComment
      );
      if (res.status === 200) {
        setCommentsDetails(updatedComment);
        setEdit(true);
        alert("Comment updated successfully");
        navigate("/comments");
      } else {
        alert("Comment failed to update");
      }
    } catch (err) {
      alert("Error updating the comment: " + err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div id="comments-details">
      <h2>{commentsDetails.name}</h2>
      <h2>{commentsDetails.email}</h2>
      {isLoading ? (
        <div className="loader-container">
          <i className="fas fa-spinner fa-spin fa-2x"></i>
        </div>
      ) : edit ? (
        <div>
          <textarea
            cols={30}
            rows={10}
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={() => updateItems(newText)}>Save</button>
          <button onClick={() => setEdit(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h2>Comment: {commentsDetails.body}</h2>
          <button onClick={() => setEdit(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};
