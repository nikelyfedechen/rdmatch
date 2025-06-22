import React from 'react';
import Checkbox from '../../shared/Checkbox';

function RecommendationType({ onRecommendationTypeChange }) {
  const recommendationTypes = [
    {
      id: 'SingleProduct',
      label: 'Produto Único',
    },
    {
      id: 'MultipleProducts',
      label: 'Múltiplos Produtos',
    },
  ];

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Tipo de Recomendação:</h2>
      <div className="flex items-center gap-8">
        {recommendationTypes.map(({ id, label }) => (
          <Checkbox
            key={id}
            type="radio"
            name="recommendationType"
            className="mr-0"
            id={id}
            value={id}
            onChange={() => onRecommendationTypeChange(id)}
          >
            {label}
          </Checkbox>
        ))}
      </div>
    </div>
  );
}

export default RecommendationType;
