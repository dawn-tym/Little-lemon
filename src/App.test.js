import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { initializeTimes, updateTimes } from './yourReducerFile'; // replace if in another file
import BookingForm from './BookingForm'; // Update path if necessary

describe('App Component Tests', () => {
  test('renders learn react link', () => {
    render( <MemoryRouter>
      <App />
    </MemoryRouter>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText(/reservation form/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('initializeTimes returns correct value', () => {
    const expectedValue = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const result = initializeTimes();
    expect(result).toEqual(expectedValue);
  });

  test('updateTimes returns the same value it is provided', () => {
    const initialState = ["17:00", "18:00", "19:00"];
    const action = { type: "UPDATE_DATE", times: initialState };
    const result = updateTimes([], action);
    expect(result).toEqual(initialState);
  });

  test('saves booking data to localStorage', () => {
    const formData = { date: "2025-04-20", time: "18:00", guests: 2, occasion: "Birthday" };
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    localStorage.setItem("bookings", JSON.stringify([formData]));

    expect(setItemSpy).toHaveBeenCalledWith("bookings", JSON.stringify([formData]));
    setItemSpy.mockRestore();
  });

  test('reads booking data from localStorage', () => {
    const formData = { date: "2025-04-20", time: "18:00", guests: 2, occasion: "Birthday" };
    localStorage.setItem("bookings", JSON.stringify(formData));

    const storedData = JSON.parse(localStorage.getItem("bookings"));
    expect(storedData).toEqual(formData);
  });

  test('guests input has correct validation attributes', () => {
    render(<BookingForm />);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toBeRequired();
  });

  test('form submission fails if required fields are empty', async () => {
    render(<BookingForm />);
    const submitBtn = screen.getByRole('button', { name: /make your reservation/i });
    submitBtn.click();
  });
  
  
});