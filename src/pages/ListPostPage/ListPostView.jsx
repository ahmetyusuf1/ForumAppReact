import ModalController from "../../components/Modal/ModalController";

const ListPostView = ({
  formData,
  isModalOpen,
  setIsModalOpen,
  username,
  setUsername,
}) => {
  return (
    <div className="container">
      {formData?.map((post, index) => (
        <div key={index} className="post">
          <div className="info">
            <h3>{post.title}</h3>
            <p
              onClick={() => {
                setIsModalOpen(true);
                setUsername(post.user);
              }}
            >
              {post.user}
            </p>
          </div>
          <p className="content">{post.text}</p>
        </div>
      ))}
      {isModalOpen && (
        <ModalController setIsModalOpen={setIsModalOpen} username={username} />
      )}
    </div>
  );
};

export default ListPostView;
