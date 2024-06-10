import { v4 as uuid } from "uuid";

class AddPostModel {
  state = {
    id: uuid(),
    date: new Date(),
    user: "",
    title: "",
    text: "",
  };
}

export default AddPostModel;
