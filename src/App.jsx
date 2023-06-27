import './App.css'
// import phases from './assets/Desktop/1624492191616.png';

import Phases from './components/Phases';
import Slider from './components/Slider';
import Stories from './components/Stories';
import TopForLargerDevices from './components/TopForLargerDevices';
import TopForSmallerDevices from './components/TopForSmallerDevices';

function App() {
  const deviceWidth = window.innerWidth;
  // console.log('width', deviceWidth);

  return (
    <div>
      {
        deviceWidth > 767
        ?
        (
          <>
            <TopForLargerDevices />
            <Phases />
          </>
        )
        :
        (
          <>
            <TopForSmallerDevices />
            <Slider />
          </>
        )

      }

      <Stories />

    </div>
  );
}

export default App
