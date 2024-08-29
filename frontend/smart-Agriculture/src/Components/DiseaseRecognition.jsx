
import './styles/DiseaseRecognition.css';
import './Diseases/FindDiseases'
import FindDiseases from './Diseases/FindDiseases';

const DiseaseRecognition = () => {
  return (
        <div className="disease-recognition" id="disease-recognition">
       <FindDiseases/>
        </div>
    );
};

export default DiseaseRecognition;
