import Project from "../components/Project";
import "../assets/styles/portfolio.css";

export default function Projects() {
  const items = [
    {
      name: "ListyFlix",
      img: 'https://github.com/jorlyna326/portfolioReact/blob/main/src/assets/images/listyflix.png?raw=true',
      description: 'ListyFlix is your ultimate partner for movie night planning, ensuring a hassle-free and memorable cinematic experience with friends and family. Are you tired of spending hours searching for the perfect film to watch? ListyFlix has you covered! Our platform makes it a breeze to discover the ideal movie for your evening, providing detailed information on where to stream it. Plus, you can create personalized movie night lists to keep track of your favorite films.',
      url: 'https://thatziro.github.io/Listy-Flix/'
    },
    {
      name: "Sweet Dreams",
      img: 'https://github.com/jorlyna326/portfolioReact/blob/main/src/assets/images/sweetdream.png?raw=true',
      description: "Struggling to get a good night's sleep? We recommend to try a Sweet Dreams app. It can be a helpful tool for improving sleep quality and overall health and well-being.",
      url: 'https://sweetdreamsproject-8e54b05db96b.herokuapp.com/'
    },
    {
      name: "Love Link",
      img: '',
      description: '',
      url: '#'
    },
  ];
  return (
    <section
      className="projects sec-pad"
      style={{
        justifyContent: "space-around",
        flexWrap: "wrap",
        alignItems: "center",
        backgroundColor: "white",
        margin: "0",
      }}
    >
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Projects</span>
          <span className="heading-sec__sub">
            Here you will find some of my personal projects.
          </span>
        </h2>

        <div className="projects__content">
          {items.map((item) => (
            <Project item={item} />
          ))}
          
        </div>
      </div>
    </section>
  );
}
