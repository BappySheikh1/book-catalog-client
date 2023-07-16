import { useState, ChangeEvent, FormEvent } from "react";
import { FiSend } from "react-icons/Fi";
import {
  useGetCommentQuery,
  usePostCommentMutation,
} from "../redux/features/book/bookApi";
interface IProps {
  id: string;
}

export default function BookReview({ id }: IProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const { data } = useGetCommentQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  console.log(data);
  const [postComment] = usePostCommentMutation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const options = {
      id: id,
      data: { reviews: inputValue },
    };

    postComment(options);
    setInputValue("");
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <form className="flex gap-5  items-center" onClick={handleSubmit}>
        <div className=" w-[50%] mx-auto flex items-center">
          <textarea
            className="min-h-[30px] w-[100%]  border border-gray-300"
            onChange={handleChange}
            value={inputValue}
          />
          <button
            type="submit"
            className="rounded-full h-10 w-20 p-2 text-[30px]"
          >
            <FiSend />
          </button>
        </div>
      </form>
      <div className="mt-10">
        {data?.data?.reviews?.map((review: string, index: string) => (
          <div key={index} className="flex gap-3 items-center justify-center mb-5">
            <div className="avatar">
              <div className="w-12">
                <img src="https://scontent.fdac146-1.fna.fbcdn.net/v/t39.30808-1/355876879_820562472783928_2807655737822715953_n.jpg?stp=c0.27.160.160a_dst-jpg_p160x160&_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHw6YSEWXL02k9-Vj3s7WmSfF5oB92ndi58XmgH3ad2LlD3iHED9LbzmiGIlPmPBSpIyimIJTNRXX6yJNCVHWVu&_nc_ohc=BsgcIjwqLuwAX_KQ4Ly&_nc_ht=scontent.fdac146-1.fna&oh=00_AfDLg7ZbUf6a1f8cK8ehUnd0bRUDuhuEqHvF7lP6RccvgQ&oe=64B96BA1" className="rounded-full" />
              </div>
            </div>
            <p>{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
