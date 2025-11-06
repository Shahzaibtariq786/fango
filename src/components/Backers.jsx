import Genesis from "/src/assets/BackersImages/GenesisBacker.png";
import RJFleming from "/src/assets/BackersImages/RJFlemingBacker.png";
import VBacker from "/src/assets/BackersImages/VBacker.png";

const Backers = () => {
  return (
    <div className="min-h-[20vh] py-4 w-full text-center 2xl:px-[var(--lg-scr-horizontal-space)]">
      <h2>Backers</h2>
      <div
        id="backersContainer"
        className="w-full xl:min-h-[50vh] min-h-[20vh] flex items-center px-6 xl:px-0 justify-center gap-x-[8%] md:pt-14 xl:pt-10"
      >
        <a href="#" className="backers">
          <img src={Genesis} alt="Genesis Backer" />
        </a>
        <a href="#" className="backers">
          <img src={RJFleming} alt="RJ Fleming Backer" />
        </a>
        <a href="#" className="backers">
          <img src={VBacker} alt="V Backer" />
        </a>
      </div>
    </div>
  );
};

export default Backers;
