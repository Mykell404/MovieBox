function Footer() {
  return (
    <div className="flex flex-col items-center justify-center px-24 py-8">
      <div className="flex gap-4">
        <img src="/assets/images/facebook.png" alt="facebook" />
        <img src="/assets/images/instagram.png" alt="instagram" />
        <img src="/assets/images/twitter.png" alt="twitter" />
        <img src="/assets/images/youtube.png" alt="youtube" />
      </div>
      <div className="my-8 flex gap-8 font-bold">
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <div>&copy; MovieBox by Mileba Micheal</div>
    </div>
  );
}

export default Footer;
