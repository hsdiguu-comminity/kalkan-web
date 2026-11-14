import { render, screen } from '@testing-library/react';
import App from '../../src/App.jsx';

describe('App', () => {
  it('başlığı gösterir', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Kalkan' })).toBeInTheDocument();
  });
});
