import classes from './Job.module.css'

const Job = () => {

  return (
    <div className={`${classes.section} section line-dark`}>
      <div className={`${classes.container} container-navbar`}>
        <div className="content">
          <h2 className='h2'>Как мы работаем</h2>

          <ul className={classes.list}>
            <li className={`${classes.item} text-base`}>Выезд сотрудника на замер в день обращения</li>
            <li className={`${classes.item} text-base`}>Заключение договора у вас дома без лишних поездок</li>
            <li className={`${classes.item} text-base`}>Различные варианты оплаты</li>
            <li className={`${classes.item} text-base`}>Беспроцентная рассрочка на 6 месяцев</li>
          </ul>
        </div>
      </div>
    </div>
  )

}

export default Job;