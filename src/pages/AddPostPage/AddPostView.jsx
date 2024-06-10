const AddPostView = ({ handleSubmit, onInputChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Post</h2>
      <fieldset>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter Username"
          onChange={(e) => onInputChange("user", e)}
        />
      </fieldset>
      <fieldset>
        <label>Title:</label>
        <input
          type="text"
          placeholder="Enter Title"
          onChange={(e) => onInputChange("title", e)}
        />
      </fieldset>
      <fieldset>
        <label>Content:</label>
        <textarea
          placeholder="Enter Content"
          onChange={(e) => onInputChange("text", e)}
        ></textarea>
      </fieldset>
      <div className="button-wrapper">
        <button>Add</button>
      </div>
    </form>
  );
};

export default AddPostView;
