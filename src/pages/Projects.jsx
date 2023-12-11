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
          {/* <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg"
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Dopefolio</h3>
              <p className="projects__row-content-desc">
                Dopefolio is a successful Open-Source project that I created
                which have been featured on some of the biggest tech sites like
                CSS-Tricks, Hostinger, etc &amp; used by thousands of developers
                globally
              </p>
              <a
                className="btn btn--med btn--theme dynamicBgClr"
                href="/project-1"
                target="_blank"
              >
                Case Study
              </a>
            </div>
          </div>
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/9199afe42f789dbddb324ed3edd326e080e693c1/28f54/assets/jpeg/wilsonport.jpeg"
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Wilsonport</h3>
              <p className="projects__row-content-desc">
                Wilsonport is a multiservice logistics and transport company and
                I created their website from scratch using the frontend tools I
                know.
              </p>
              <a
                className="btn btn--med btn--theme dynamicBgClr"
                href="/project-2"
                target="_blank"
              >
                Case Study
              </a>
            </div>
          </div>
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/61fc288f39a306e3130c72643480ce015dec48ae/e3272/assets/jpeg/boreal-coffee-clone.jpeg"
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Boreal Coffee Clone</h3>
              <p className="projects__row-content-desc">
                I re-created the frontend of Boreal Coffee's official web app
                because I got attracted to their beautiful UI. It was a great
                experience for me to build the entire frontend.
              </p>
              <a
                className="btn btn--med btn--theme dynamicBgClr"
                href="/project-3"
                target="_blank"
              >
                Case Study
              </a>
            </div>
          </div>
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/74f6186aaa2b6d5f6ea6da1013abfeb672f5c807/aee81/assets/jpeg/crown-template.jpeg"
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Crown Template</h3>
              <p className="projects__row-content-desc">
                Crown is a web template that I created targeting the restaurant
                and food industry which anyone can use to present their business
                online.
              </p>
              <a
                className="btn btn--med btn--theme dynamicBgClr"
                href="/project-4"
                target="_blank"
              >
                Case Study
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
