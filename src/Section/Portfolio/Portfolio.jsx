import classes from './Portfolio.module.css'
import Gallery from '../../Components/Gallery/Gallery';
import { jobImages } from '../../utils/gallery';

const Portfolio = () => {

  return (
    <div className={`${classes.section} section line-dark`} data-nav-text="#1A1A1A">
      <div className="container">
        <div className="content">
          <h2 className={`${classes.title} h2`}>Наши работы</h2>
          <Gallery images={jobImages} />
        </div>
      </div>
    </div>
  )

}

export default Portfolio;