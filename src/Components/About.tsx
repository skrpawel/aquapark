import img from "../assets/pool.png";
import BaseComponent from "./BaseComponent";

const About = () => {
  return (
    <div className="h-full max-h-screen flex flex-col items-center lg:flex-row pt-20 px-8">
      <div className="flex flex-col items-center p-4 my-4 ">
        <h2 className="text-3xl m-4 underline">Informacje ogólne</h2>
        <p className="xl:w-1/2">
          Jeden z największych parków wodnych w Europie. Tropikalna atmosfera i
          moc atrakcji. Baseny rekreacyjne, sportowe, nowoczesna strefa fitness
          i saunarium. Szukasz idealnego kąpieliska w Łodzi? Aquapark to
          doskonałe miejsce dla miłośników zabaw wodnych, którzy poszukują
          sposobu na relaks i wypoczynek po ciężkim dniu.
        </p>
      </div>
      <img src={img} className="w-3/4 m-4 md:w-1/2" />
    </div>
  );
};

export default About;
