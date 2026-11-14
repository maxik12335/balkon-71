import classes from './About.module.css';

const services = [
  'остекление балконов и лоджий: холодное, теплое, алюминиевое, пластиковое',
  'ремонт балконов: от косметического до капитального',
  'отделка балконов: дерево, пластик, вагонка, сайдинг',
  'окна: широкий выбор оконных систем для квартир и домов',
];

const advantages = [
  'профессиональные монтажники: опыт работы, соблюдение технологий, гарантия на работы',
  'высококачественные материалы: мы работаем с проверенными производителями',
  'индивидуальный подход: учитываем все ваши пожелания и создаем проект "под ключ"',
  'доступные цены: приятные цены и гибкие условия оплаты',
];

const About = () => {
  const splitText = (text) => {
    const colonIndex = text.indexOf(':');
    if (colonIndex === -1) return [text, ''];
    return [text.slice(0, colonIndex + 1), text.slice(colonIndex + 1).trim()];
  };

  return (
    <div className={`${classes.section} section line-dark`}>
      <div className={`${classes.container} container`}>
        <div className="content">
          <div className={classes.header}>
            <h2 className='h2'>О нас</h2>
            <p className='text-base'>Компания <span className='bold'>"Балкон Тула"</span> — это опыт, качество и гарантия успеха для вашего балкона</p>
          </div>

          <div className={classes.texts}>
            <h3 className='h3'>Мы предлагаем комплексные услуги:</h3>
            
            <ul className={classes.list}>
              {services.map((item, i) => {
                const [beforeColon, afterColon] = splitText(item);
                return (
                  <li className={`${classes.item} text-sm`} key={i}>
                    <span className={`${classes.bold} text-base`}>{beforeColon}</span> {afterColon}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={classes.texts}>
            <h3 className='h3'>Наши преимущества:</h3>

            <ul className={classes.list}>
              {advantages.map((item, i) => {
                const [beforeColon, afterColon] = splitText(item);
                return (
                  <li className={`${classes.item} text-sm`} key={i}>
                    <span className={`${classes.bold} text-base`}>{beforeColon}</span> {afterColon}
                  </li>
                );
              })}
            </ul>
          </div>

          <p className="text-base">
            Мы делаем всё, чтобы ваш балкон стал уютным, комфортным и функциональным пространством! «Балкон Тула» — ваш балкон в надёжных руках!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
