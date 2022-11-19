import BaseComponent from "./BaseComponent";
import PhotoBlock from "./PhotoBlock";

const urls = [
  "https://cdn-cf.ginx.tv/respawn-cdn/Rk99-Hyn5eAPDah64hj1wnwtroeT_RfUtAd7lPPUOus/fill/1280/0/no/1/aHR0cHM6Ly93d3cuZ2lueC50di91cGxvYWRzMi9hbmRyZXdfdGF0ZS9BbmRyZXdfVGF0ZV83X0lOU1RBR1JBTS5qcGc.webp",
  "https://staticg.sportskeeda.com/editor/2022/08/0ba54-16600573553296-1920.jpg",
  "https://yt3.ggpht.com/WrCc96X4N6uDvbzbtM9dsc7P3Eqe315fsL3qS26nbu4xH3QABRIX5LiR4jDhY1-quFREWJQYLA=s900-c-k-c0x00ffffff-no-rj",
  "https://i0.wp.com/www.followchain.org/wp-content/uploads/2022/07/andrew-tate-fight.png",
  "https://www.silentguitarchords.com/wp-content/uploads/2022/08/Andrew-Tate-8.jpg",
  "https://staticg.sportskeeda.com/editor/2022/08/0ba54-16600573553296-1920.jpg",
  "https://i.dailymail.co.uk/1s/2022/08/28/21/61813455-11154837-image-a-16_1661719990541.jpg",
];

const Gallery = () => {
  return (
    <div className="bg-white h-full xl:max-h-screen  px-4  mx-auto justify-center flex flex-nowrap ">
      {urls.map((url) => (
        <PhotoBlock imgURL={url} />
      ))}
    </div>
  );
};

export default Gallery;
