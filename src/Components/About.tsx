import img from "../assets/pool.png";

const About = () => {
  return (
    <div className="h-full max-h-screen flex flex-col justify-center items-center lg:flex-row pt-20 px-8">
      <div className="flex flex-col xl:items-center p-4 my-4 text-left ">
        <h2 className="text-4xl md:text-5xl font-bold xl:w-1/2 my-4">O nas</h2>
        <p className="xl:w-1/2 text-sm sm:text-base">
          <span className="text-[#219ebc] font-bold">Wavy</span> to jeden z
          największych parków wodnych w Europie. Tropikalna atmosfera i moc
          atrakcji. Baseny rekreacyjne, sportowe, nowoczesna strefa fitness i
          saunarium. Szukasz idealnego kąpieliska w Dubaju? Aquapark{" "}
          <span className="text-[#219ebc] font-bold">Wavy</span> to doskonałe
          miejsce dla miłośników zabaw wodnych, którzy poszukują sposobu na
          relaks i wypoczynek po ciężkim dniu.
        </p>
      </div>
      <img src={img} className="w-1/2 sm:w-3/4 m-4 md:w-1/2" />
    </div>
  );
};

export default About;
