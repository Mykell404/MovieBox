import Rating from "../Rating";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className=" bg-[url('assets/images/j-wick.png')] bg-cover px-24 py-8 text-white">
      <Navbar />
      <div className="flex justify-between">
        <div className="my-8">
          <p className="text-5xl font-medium leading-[56px]">
            John Wick 3 :
            <br />
            Parabellum
          </p>
          <Rating />
          <div className="mb-4 w-[302px]">
            <p className="text-sm">
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </p>
          </div>
          <div className="mb-8 flex w-36 items-center rounded-lg bg-[#BE123C] p-2">
            <img src="assets/images/play.png" alt="play" />
            <p>Watch Trailer</p>
          </div>
        </div>
        <div className="te flex  flex-col items-center justify-center text-lg">
          <p>1</p>
          <p>2</p>
          <div className="flex text-center text-3xl">
            <p>-</p>
            <p>3</p>
          </div>

          <p>4</p>
          <p>5</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
