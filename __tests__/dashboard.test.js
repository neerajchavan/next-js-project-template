import DashboardPage from "@/pages/dashboard";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Dashboard", () => {
  it("dashboard page", () => {
    const { asFragment } = render(<DashboardPage />);

      expect(screen.getByTestId("dashboard")).toBeInTheDocument();    
  });
});