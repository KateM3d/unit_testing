import { render, screen } from "@testing-library/react";
import App from "./App";
import { shallow } from "enzyme";
import PersonList from "./PersonList";

// it("renders learn react link", () => {
//     render( < App / > );
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });

describe("App", () => {
    let appWrapper;
    beforeAll(() => {
        appWrapper = shallow( < App / > );
    });

    it("renders a person list", () => {
        //to display some sort of components that gives the list of names
        const personList = appWrapper.find(PersonList);

        expect(personList).toHaveLength(1);
    });

    it("has state", () => {
        const appState = appWrapper.state();

        expect(appState).not.toBeNull();
    });

    it("has a people property on state", () => {
        const appState = appWrapper.state();

        expect(appState.people).toBeDefined();
    });

    it("passes people property of state to personList as prop", () => {
        const personList = appWrapper.find(PersonList);
        expect(personList.props().people).toEqual(appWrapper.state().people);
    });
});