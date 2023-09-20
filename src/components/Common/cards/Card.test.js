import { render, screen } from "@testing-library/react";
import Card from "./Card";
import { BrowserRouter } from "react-router-dom";
import store from "../../../store/Index";
import { Provider } from "react-redux";

test("renders card", () => {
  render(
    <BrowserRouter>
      <Provider store={{ ...store }}>
        <Card />
      </Provider>
    </BrowserRouter>
  );
  const cardElement = screen.getByTestId("card-wrapper");
  expect(cardElement).toBeInTheDocument();
});
