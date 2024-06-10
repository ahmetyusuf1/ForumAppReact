import { useEffect, useState } from "react";
import ListPostView from "./ListPostView";
import axios from "axios";

const ListPostController = () => {
  const [formData, setFormData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3040/posts")
      .then((res) => setFormData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ListPostView
      formData={formData}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      username={username}
      setUsername={setUsername}
    />
  );
};

export default ListPostController;
