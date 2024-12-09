import Home from "../src/Budgeting-app/client/src/Home/Home";

describe(Home, () => {

    it("Home page renders without crashing", () => {
        render(<Home />);
    });

});