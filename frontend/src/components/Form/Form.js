// Form.js
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useForm from '../../hooks/useForm';

function Form({
  preferences,
  features,
  getRecommendations,
  setRecommendations,
}) {
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataRecommendations = getRecommendations(formData);
    setRecommendations(dataRecommendations);

    if (window.innerWidth >= 768) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isFormInvalid =
    formData.selectedPreferences.length === 0 ||
    formData.selectedFeatures.length === 0 ||
    !formData.selectedRecommendationType;

  return (
    <form
      className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <Preferences
        preferences={preferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />
      <Features
        features={features}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />
      <RecommendationType
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />
      <SubmitButton text="Obter recomendação" disabled={isFormInvalid} />
    </form>
  );
}

export default Form;
