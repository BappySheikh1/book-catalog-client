import { useState, ChangeEvent, FormEvent } from "react";
import { FiSend } from "react-icons/Fi";
interface IProps {
  id: string;
}

export default function BookReview({ id }: IProps) {
  const [inputValue, setInputValue] = useState<string>("");

  // const { data } = useGetCommentQuery(id, {
  //   refetchOnMountOrArgChange: true,
  //   pollingInterval: 30000,
  // });

  // const [postComment, { isError, isLoading, isSuccess }] =
  //   usePostCommentMutation();
  // console.log(isError);
  // console.log(isLoading);
  // console.log(isSuccess);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);

    const options = {
      id: id,
      data: { comment: inputValue },
    };

    //   postComment(options);
    setInputValue("");
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
        <textarea
          className="min-h-[30px]"
          onChange={handleChange}
          value={inputValue}
        />
        <button
          type="submit"
          className="rounded-full h-10 w-10 p-2 text-[25px]"
        >
          <FiSend />
        </button>
      </form>
      <div className="mt-10">
        {data?.comments?.map((comment: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            {/* <avatar> */}
            <img src="https://github.com/shadcn.png" />
            {/* <AvatarFallback>CN</AvatarFallback> */}
            {/* </Avatar> */}
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
