import { IoMdClose } from "react-icons/io";

const ModalView = ({ setIsModalOpen, username, data }) => {
  console.log(data);
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-top">
          <h4>{username}</h4>
          <IoMdClose
            size={34}
            onClick={() => setIsModalOpen(false)}
            className="close"
          />
        </div>
        {data?.map((i) => (
          <div className="post" key={i.id}>
            <h2>{i.title}</h2>
            <p>{i.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalView;
