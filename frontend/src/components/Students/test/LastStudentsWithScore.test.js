/* eslint-disable testing-library/no-wait-for-side-effects */
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "state/store";
import MockAdapter from "axios-mock-adapter";
import api, { URL_API } from "services";
import LastWithScore from "../LastWithScore";
import students from "__mock__/students";
import * as redux from "react-redux";

// jest.mock("axios");

const renderWithProvider = (ui) => {
  render(<Provider store={store}>{ui}</Provider>);
};

let spyOnUseSelector;

describe("Last Student With Scores", () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(api);
    // Mock useSelector hook
    spyOnUseSelector = jest.spyOn(redux, "useSelector");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render a loading message", async () => {
    spyOnUseSelector.mockReturnValue({ students: [], loading: true });
    await waitFor(() => renderWithProvider(<LastWithScore />));
    screen.getByText(/Loading.../i);
  });

  it("should render a empty student list message", async () => {
    mock.onGet(`${URL_API}students/scores`).reply(200, []);
    await waitFor(() => renderWithProvider(<LastWithScore />));
    screen.getByText(/No students found!/i);
  });

  it("should render a student list", async () => {
    mock.onGet(`${URL_API}students/scores`).reply(200, students);
    console.log("\n\n***\n mock: ", `${URL_API}students`, "\n***\n");
    await waitFor(() => renderWithProvider(<LastWithScore />));
    const list = await screen.findAllByRole("listitem");

    expect(list.length).toBe(3);
  });
});
