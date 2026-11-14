import classes from './Uslugy.module.css'
import Btn from '../../Components/UI/Btn/Btn'
import VideoHero from '../../Components/VideoHero/VideoHero'

const Uslugy = () => {

  return (
    <div className={`${classes.section} section line-dark`} data-nav-text="#1A1A1A">
      {/* <VideoHero /> */}
      <div className="container">
        <div className="content">
          <h2 className={`${classes.title} h2`}>Услуги</h2>
          <ul className={classes.listUslugy}>
            <li className={`${classes.itemUslugy} text-sm`}>
              <p className='h3'>Ремонт</p>
              внешняя, внутренняя отделка, вывод электрики, утепление, а также сварочные работы
            </li>
            <li className={`${classes.itemUslugy} text-sm`}>
              <p className='h3'>Остекление</p>
              остекление домов, дач, квартир, балконов
            </li>
            <li className={`${classes.itemUslugy} text-sm`}>
              <p className='h3'>Мебель</p>
              изготовление мебели для балконов под ваши требования
            </li>
          </ul>
          <div className={classes.text}>
            <p className='text-base'>делаем работу за <span className={`${classes.bold}`}>2 дня</span> и даем <span className={`${classes.bold}`}>1 год</span> гарантию</p>
            <p className='text-base'>мастера с 10-им стажем. Помогли более <span className={`${classes.bold}`}>1000 людям</span> создать уютный балкон</p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Uslugy;