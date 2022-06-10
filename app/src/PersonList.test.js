import React from "react";
import { shallow } from "enzyme";
import PersonList from "./PersonList";

describe("PersonList", () => {
            it("renders ul element", () => {
                const personListWrapper = shallow( < PersonList / > );
                const peopleListUls = personListWrapper.find("ul");

                expect(peopleListUls).toHaveLength(1);
            });

            it("renders no li elements when no people exists", () => {
                        const people = [];
                        const personListWrapper = shallow( < PersonList people = { people }
                            />);
                            const peopleListItems = personListWrapper.find("li");

                            expect(peopleListItems).toHaveLength(0);
                        });

                    it("renders one li element when one person exists", () => {
                            const people = [{ fristName: "John", lastName: "Smith" }];
                            const personListWrapper = shallow( < PersonList people = { people }
                                />);
                                const peopleListItems = personListWrapper.find("li");

                                expect(peopleListItems).toHaveLength(1);
                            });

                        it("renders one li element for each person that exists", () => {
                                const people = [
                                    { fristName: "John", lastName: "Smith" },
                                    { fristName: "Joane", lastName: "Anderson" },
                                ];
                                const personListWrapper = shallow( < PersonList people = { people }
                                    />);
                                    const peopleListItems = personListWrapper.find("li");

                                    expect(peopleListItems).toHaveLength(2);
                                });
                        });