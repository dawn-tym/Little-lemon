import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test('renders initializeTimes for correct value', () => {
  const expectedValue = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const result = initializeTimes();
  expect(result).toEqual(expectedValue);
});

test('renders updateTimes to return the same value it is provided', () => {
  const initialState = ["17:00", "18:00", "19:00"];
  const action = { type: "UPDATE_DATE", date: "2025-04-06" };
  const result = updateTimes(initialState, action);
  expect(result).toEqual(initialState);
});

test('saves booking data to localStorage'), () => {
  const formData = {date: "2025-04-20", time: "18:00", guests: 2, occasion: "Birthday"};
  const setItemSpy = jest.spyOn(window.localStorage.__proto__, 'setItem');

  localStorage.setItem("bookings", JSON.stringify([formData]));
  expect(setItemSpy).toHaveBeenCalledWith("bookings", JSON.stringify([formData]));
}

test('saves booking data to localStorage'), () => {
  const formData = {date: "2025-04-20", time: "18:00", guests: 2, occasion: "Birthday"};
  localStorage.setItem("bookings", JSON.stringify(formData));

  const storedData = JSON.parse(localStorage.getItem("bookings"));
  expect(storedData).toEqual(formData);
}