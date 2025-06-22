import Form from './Form';
import { fireEvent, render, screen } from '@testing-library/react';
import { getRecommendations } from '../../services/recommendation.service';

const mockUseForm = {
  formData: {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  },
  handleChange: jest.fn(),
};

jest.mock('../../hooks/useForm', () => ({
  __esModule: true,
  default: () => mockUseForm,
}));

jest.mock('../../services/recommendation.service', () => ({
  getRecommendations: jest.fn(),
}));

const mockProduct = {
  id: 1,
  name: 'RD Station CRM',
  category: 'Vendas',
  preferences: [
    'Integração fácil com ferramentas de e-mail',
    'Personalização de funis de vendas',
    'Relatórios avançados de desempenho de vendas',
  ],
  features: [
    'Gestão de leads e oportunidades',
    'Automação de fluxos de trabalho de vendas',
    'Rastreamento de interações com clientes',
  ],
};

const defaultPreferences = ['Integração fácil com ferramentas de e-mail'];
const defaultFeatures = ['Gestão de leads e oportunidades'];
const defaultRecommendationType = 'SingleProduct';

const setupMockUseForm = ({
  preferences = defaultPreferences,
  features = defaultFeatures,
  recommendationType = defaultRecommendationType,
} = {}) => {
  mockUseForm.formData.selectedPreferences = preferences;
  mockUseForm.formData.selectedFeatures = features;
  mockUseForm.formData.selectedRecommendationType = recommendationType;
};

const renderForm = ({
  preferences = defaultPreferences,
  features = defaultFeatures,
  getRecommendationsMock = jest.fn(),
  setRecommendationsMock = jest.fn(),
} = {}) => {
  return render(
    <Form
      preferences={preferences}
      features={features}
      getRecommendations={getRecommendationsMock}
      setRecommendations={setRecommendationsMock}
    />
  );
};

describe('Form', () => {
  beforeEach(() => {
    setupMockUseForm();
  });

  describe('Preferences', () => {
    test('Atualiza lista de preferências', () => {
      renderForm();

      const optionPreference = screen.getByLabelText(
        'Integração fácil com ferramentas de e-mail'
      );
      fireEvent.click(optionPreference);

      expect(optionPreference.checked).toBe(true);
      expect(mockUseForm.handleChange).toHaveBeenCalledWith(
        'selectedPreferences',
        ['Integração fácil com ferramentas de e-mail']
      );
    });

    test('Remove a preferência quando ela já existe na lista', () => {
      renderForm();

      const optionPreference = screen.getByLabelText(
        'Integração fácil com ferramentas de e-mail'
      );

      fireEvent.click(optionPreference);
      expect(optionPreference.checked).toBe(true);

      fireEvent.click(optionPreference);
      expect(optionPreference.checked).toBe(false);
    });
  });

  describe('Features', () => {
    test('Deve atualizar Features', () => {
      renderForm();

      const optionPreference = screen.getByLabelText(
        'Gestão de leads e oportunidades'
      );
      fireEvent.click(optionPreference);

      expect(mockUseForm.handleChange).toHaveBeenCalledWith(
        'selectedFeatures',
        ['Gestão de leads e oportunidades']
      );
    });
  });

  describe('RecommendationType', () => {
    test('Deve atualizar RecommendationType', () => {
      renderForm();

      const optionRecommendationType = screen.getByLabelText('Produto Único');
      fireEvent.click(optionRecommendationType);

      expect(mockUseForm.handleChange).toHaveBeenCalledWith(
        'selectedRecommendationType',
        'SingleProduct'
      );
    });
  });
  describe('SubmitButton', () => {
    beforeEach(() => {
      global.innerWidth = 1024;
      window.scrollTo = jest.fn();
    });
    test('Botão deve estar desabilitado sem seleção de preferências', () => {
      setupMockUseForm({ preferences: [], features: [] });
      renderForm({ preferences: [], features: [] });

      const SubmitButton = screen.getByText('Obter recomendação');
      expect(SubmitButton).toBeDisabled();
    });

    test('Botão deve estar habilitado com preferências selecionadas', () => {
      renderForm();

      const SubmitButton = screen.getByText('Obter recomendação');
      expect(SubmitButton).not.toBeDisabled();
    });

    test('Deve chamar função handleSubmit e fazer scroll para o topo da página', () => {
      getRecommendations.mockReturnValue(mockProduct);

      renderForm({
        getRecommendationsMock: getRecommendations,
      });

      const SubmitButton = screen.getByText('Obter recomendação');
      fireEvent.click(SubmitButton);

      expect(getRecommendations).toHaveBeenCalled();
      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 0,
        behavior: 'smooth',
      });
    });

    test('Não deve fazer scroll para o topo da página ao chamar handleSubmit', () => {
      window.innerWidth = 320;

      renderForm();

      const SubmitButton = screen.getByText('Obter recomendação');
      fireEvent.click(SubmitButton);

      expect(window.scrollTo).not.toHaveBeenCalledWith({
        top: 0,
        behavior: 'smooth',
      });
    });
  });
});
