// getRecommendations.js

const getRecommendations = (
  formData = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  },
  products
) => {
  const filteredProductsBySelections = products
    .filter((product) =>
      product.preferences.some((preference) =>
        formData.selectedPreferences.includes(preference)
      )
    )
    .filter((product) =>
      product.features.some((feature) =>
        formData.selectedFeatures.includes(feature)
      )
    );

  if (formData.selectedRecommendationType === 'SingleProduct') {
    return filteredProductsBySelections.length > 1
      ? [filteredProductsBySelections[filteredProductsBySelections.length - 1]]
      : [filteredProductsBySelections[0]];
  }

  return filteredProductsBySelections;
};

export default { getRecommendations };
