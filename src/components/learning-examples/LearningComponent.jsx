import FirstComponent from './FirstComponent';
import {FifthComponent} from './FirstComponent';
import TenthComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import LearningJavaScript from './LearningJavaScript';

// instead of writing full paths './components/learning-examples/LearningComponent' we can use the above way

export default function LearningComponent() {
    return (
      <div className="App">
        
        <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/>
        <FourthComponent/>
        <FifthComponent/>
        <TenthComponent/>
        <LearningJavaScript/>
      </div>
    );
  }