export default function Header() {
  return (
    <>
      <div className="carousel w-full h-[70vh]">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-photo/books-beach_1048-4666.jpg?w=826&t=st=1689467881~exp=1689468481~hmac=1489c9cf81dbb82b6e36875a59f06cf59fcb5b0b32e8a1bae2d1b26b06aa4dcf"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-photo/library-with-books_1063-98.jpg?w=740&t=st=1689467920~exp=1689468520~hmac=f1e4bcfe06bf486a4d61d4c306c131ce536cd210e33e526dd8ad8b0398249635"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-photo/ready-back-school_1134-12.jpg?w=740&t=st=1689467994~exp=1689468594~hmac=b163a8f7817ba2bd73494ec50e9fcba9670b5d9add4805f5ce0b96c541a959d7"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-photo/stack-books-with-glasses-wooden-desk_1134-17.jpg?w=740&t=st=1689468044~exp=1689468644~hmac=689288ca970e3d40d2a215d4c476a19a81a083bed6b64dbf2dda5b9cd583dc58"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </>
  );
}
