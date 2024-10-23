import { fireEvent,render, screen } from '@testing-library/react';
import { IoSearchCircleSharp } from 'react-icons/io5';

import Button from './Button';

describe('Button Component', () => {
  test('renders the button with the correct text', () => {
    render(<Button>Click</Button>);
    const buttonElement = screen.getByText('Click');
    expect(buttonElement).toBeInTheDocument();
  });

  test('applies the provided className', () => {
    render(<Button className="my-className">Click</Button>);
    const buttonElement = screen.getByText('Click');
    expect(buttonElement).toHaveClass('my-className');
  });

  test('triggers onClick event when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    const buttonElement = screen.getByText('Click');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders correct icon as children', () => {
    render(
      <Button>
        <IoSearchCircleSharp data-testid="search-icon" />
      </Button>,
    );
    const iconElement = screen.getByTestId('search-icon');
    expect(iconElement).toBeInTheDocument();
  });
});
