import '../assets/styles/portfolio.css'

export default function Project({item}) {
  return (
    <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src={item.img}
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">{item.name}</h3>
              <p className="projects__row-content-desc">
                {item.description}
              </p>
              <a
                className="btn btn--med btn--theme dynamicBgClr"
                href={item.url}
                target="_blank"
              >
                Check it out live
              </a>
            </div>
          </div>
  )
}
