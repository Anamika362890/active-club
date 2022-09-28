
import './App.css';
import Activities from './Components/Activities/Activities';
import ActivitiesInfo from './Components/ActivitiesInfo/ActivitiesInfo';


function App() {
  return (
    <div className='Home'>
      <div className='Games'>
        <Activities></Activities>

      </div>
      <div className='PersonalInfo'>
        <ActivitiesInfo></ActivitiesInfo>

      </div>

    </div>

  );
}

export default App;
