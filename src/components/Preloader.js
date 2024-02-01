const Preloader = ({ isLoading }) => {
  return (
    <div className={`pre-loader ${isLoading ? "fade-out" : ""}`}>
      <div className="pre-loader-image">
        <img src="/images/sc-icon-c.png" alt="" />
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Preloader;
