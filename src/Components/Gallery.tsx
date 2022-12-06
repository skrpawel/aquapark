import BaseComponent from "./BaseComponent";
import PhotoBlock from "./PhotoBlock";

const urls = [
  "https://img.freepik.com/premium-wektory/ilustracja-wektorowa-izometryczny-park-wodny-aquapark-slajdy-dla-dzieci_589019-2812.jpg?w=1380",
  "https://img.freepik.com/premium-vector/isometric-aqua-park-with-water-pool-illustration-isolated-white-background-summer-vacation-concept-enjoying-suntan-woman-bikini-inflatable-mattress-swimming-pool_589019-2864.jpg?w=2000",
  "https://img.freepik.com/premium-wektory/lodz-lub-kuter-na-przyczepie-wodowanie-malej-motorowki-na-rampie-plaski-3d-izometryczny-wysokiej-jakosci-transport-wodny_589019-3222.jpg?w=1380",
  "https://img.freepik.com/premium-vector/isometric-male-swimmers-doing-butterfly-style-different-swimming-lanes-sports-background_589019-3436.jpg?w=2000",
  "https://img.freepik.com/premium-wektory/izometryczny-aqua-park-z-barem-basenem-wodnym-ludzmi-lub-goscmi-ilustracja-wektorowa-na-bialym-tle_589019-2654.jpg?w=1380",
  "https://img.freepik.com/premium-vector/summer-fun-aqua-park-child-with-parents-water-slide-aquapark-summer-holiday-flat-3d-vector-isometric-illustration_589019-1759.jpg?w=2000",
  "https://img.freepik.com/premium-wektory/basen-z-bar-izometryczny-ilustracji-wektorowych-mlodzi-ludzie-plywaja-w-basenie-relaksuja-sie-i-pija-koktajle-w-barze-ilustracja-wektorowa_589019-2809.jpg?w=1380",
];

const Gallery = () => {
  return (
    <div
      id="gallery"
      className=" h-full max-h-screen mx-auto justify-center flex flex-nowrap"
    >
      {urls.map((url) => (
        <PhotoBlock imgURL={url} />
      ))}
    </div>
  );
};

export default Gallery;
