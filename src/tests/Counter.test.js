// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
    // Render the Counter component here
    render(<Counter />);
});

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
    const counterMessage = screen.getByText(/counter/i);
    expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
    const counterValue = screen.getByText(/0/i);
    expect(counterValue).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
    const incrementButton = screen.getByText(/\+/i);
    fireEvent.click(incrementButton);

    const updatedCounterValue = screen.getByText(/1/i);
    expect(updatedCounterValue).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
    // Simulate clicking the "-" button and check if the count decrements
    const decrementButton = screen.getByText(/-/i);
    fireEvent.click(decrementButton);

    const updatedCounterValue = screen.getByText(/-1/i);
    expect(updatedCounterValue).toBeInTheDocument();
});
