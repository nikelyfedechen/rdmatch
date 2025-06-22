import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const mockUseProducts = {
  preferences: [],
  features: [],
  products: [],
};

const mockUseRecommendations = {
  recommendations: [],
  getRecommendations: jest.fn(),
  setRecommendations: jest.fn(),
};

jest.mock('./hooks/useProducts', () => ({
  __esModule: true,
  default: () => mockUseProducts,
}));

jest.mock('./hooks/useRecommendations', () => ({
  __esModule: true,
  default: () => mockUseRecommendations,
}));

describe('App', () => {
  test('deve renderizar o título e a descrição', () => {
    render(<App />);
    expect(
      screen.getByText('Recomendador de Produtos RD Station')
    ).toBeInTheDocument();
  });

  test('Retorna mensagem inicial da lista de recomendações', () => {
    render(<App />);

    const submitButton = screen.getByText('Obter recomendação');
    fireEvent.click(submitButton);

    expect(
      screen.getByText('Nenhuma recomendação encontrada.')
    ).toBeInTheDocument();
  });
});
