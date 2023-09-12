function Rating() {
  return (
    <div className="my-4 flex gap-4 text-sm">
      <div className="flex items-center gap-2">
        <img src="assets/images/imdb.png" alt="imdb" />
        <p> 86.0/100</p>
      </div>
      <div className="flex items-center gap-2">
        <img src="assets/images/rotten-tomatoes.png" alt="tomato" />
        <p>97%</p>
      </div>
    </div>
  );
}

export default Rating;
