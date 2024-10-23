import { render, screen } from '@testing-library/react';

import Input from './Input';

describe('Input Component', () => {
  test('renders the input component', () => {
    render(<Input placeholder="Enter text" />);
    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toBeInTheDocument();
  });

  test('applies props correctly', () => {
    render(<Input type="text" value="Test Value" readOnly />);
    const inputElement = screen.getByDisplayValue('Test Value');
    expect(inputElement).toHaveAttribute('type', 'text');
    expect(inputElement).toHaveAttribute('readOnly');
  });

  test('applies the provided className', () => {
    render(<Input className="my-className" />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveClass('my-className');
  });
});
