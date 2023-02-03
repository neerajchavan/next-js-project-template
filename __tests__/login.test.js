import LoginPage from "@/pages/login";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Login", () => {
  it("login page", () => {
    const { asFragment } = render(<LoginPage />);
    // expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId("email")).toBeInTheDocument();
  });
});