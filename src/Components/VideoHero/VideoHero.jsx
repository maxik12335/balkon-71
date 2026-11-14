import bgVideo from '../../assets/video/bg.mp4'
import classes from './VideoHero.module.css'
import Btn from '../../Components/UI/Btn/Btn'

const VideoHero = () => {
  return (
    <div className={classes.hero}>
      <video
        className={classes.video}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className={classes.overlay}></div>
      <div className={classes.content}>
        <h1>Твой заголовок</h1>
        <Btn isColor="dark" link="/catalog">Каталог</Btn>
      </div>
    </div>
  )
}

export default VideoHero
