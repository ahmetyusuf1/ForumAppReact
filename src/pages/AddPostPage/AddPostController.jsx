import { useState } from "react";
import AddPostView from "./AddPostView";
import AddPostModel from "./AddPostModel";
import axiosInstace from "../../constants";
import { useNavigate } from "react-router-dom";

const AddPostController = () => {
  const formModel = new AddPostModel();
  const [form, setForm] = useState(formModel.state);

  const navigate = useNavigate();

  const onInputChange = (key, e) => {
    setForm({ ...form, [key]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.user || !form.title || !form.text) {
      alert("Lutfen doldurunuz");
    }
    axiosInstace.post("posts", form).then(() => navigate("/"));
  };
  return (
    <AddPostView handleSubmit={handleSubmit} onInputChange={onInputChange} />
  );
};

export default AddPostController;
