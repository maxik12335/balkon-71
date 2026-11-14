import About from '../../Section/About/About';
import Job from '../../Section/Job/Job';
import Portfolio from '../../Section/Portfolio/Portfolio';
import SectionForm from '../../Section/SectionForm/SectionForm';
import SectionMain from '../../Section/SectionMain/SectionMain';
import Uslugy from '../../Section/Uslugy/Uslugy';


const Main = () => {

  return (
    <div>
      <SectionMain />
      <Uslugy />
      <Portfolio />
      <Job />
      <About />
      <SectionForm />
    </div>
  )
}

export default Main;