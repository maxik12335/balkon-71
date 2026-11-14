import classes from "./Footer.module.css"
import vk from '../../assets/navbar/vk.png'
import mail from '../../assets/navbar/mail.png'

const Footer = () => {
  return (
    <div className="section" id="contacts"> 
      <div className={`${classes.container} container-navbar`}>
        <div className="content">
          <div className={classes.footer}>
            <a className="text-sm hover" href="tel:+74872791790">+ 7 487 279 17 90</a>
            <div className={classes.media}>
              <a className={`${classes.link} hover`} href="https://vk.com/balkon_tula71" target="_blank">
                <img className={classes.img} src={vk} alt="vk" />
              </a>
              <a className={`${classes.link} hover`} href="mailto:balkon_tula71@mail.ru" target="_blank">
                <img className={classes.img} src={mail} alt="mail" />
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer;