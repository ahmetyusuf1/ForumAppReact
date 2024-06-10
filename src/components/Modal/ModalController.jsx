import { useEffect, useState } from "react";
import ModalView from "./ModalView";
import axiosInstace from "../../constants";

const ModalController = ({ setIsModalOpen, username }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstace.get(`posts?user=${username}`).then((res) => setData(res.data));
  }, [username]);

  return (
    <ModalView
      setIsModalOpen={setIsModalOpen}
      username={username}
      data={data}
    />
  );
};

export default ModalController;
