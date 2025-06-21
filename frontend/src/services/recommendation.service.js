// getRecommendations.js

const getRecommendations = (
  formData = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  },
  products
) => {
  const matchProducts = products
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
    return matchProducts.length > 1
      ? [matchProducts[matchProducts.length - 1]]
      : [matchProducts[0]];
  }

  return matchProducts;
};

export default { getRecommendations };
