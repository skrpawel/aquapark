import BaseComponent from "./BaseComponent";
import PhotoBlock from "./PhotoBlock";

const urls = [
  "https://staticg.sportskeeda.com/editor/2022/08/0ba54-16600573553296-1920.jpg",
  "https://img.freepik.com/premium-vector/isometric-aqua-park-with-water-pool-illustration-isolated-white-background-summer-vacation-concept-enjoying-suntan-woman-bikini-inflatable-mattress-swimming-pool_589019-2864.jpg?w=2000",
  "https://yt3.ggpht.com/WrCc96X4N6uDvbzbtM9dsc7P3Eqe315fsL3qS26nbu4xH3QABRIX5LiR4jDhY1-quFREWJQYLA=s900-c-k-c0x00ffffff-no-rj",
  "https://img.freepik.com/premium-vector/isometric-male-swimmers-doing-butterfly-style-different-swimming-lanes-sports-background_589019-3436.jpg?w=2000",
  "https://i0.wp.com/www.followchain.org/wp-content/uploads/2022/07/andrew-tate-fight.png",
  "https://img.freepik.com/premium-vector/summer-fun-aqua-park-child-with-parents-water-slide-aquapark-summer-holiday-flat-3d-vector-isometric-illustration_589019-1759.jpg?w=2000",
  "https://www.silentguitarchords.com/wp-content/uploads/2022/08/Andrew-Tate-8.jpg",
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
