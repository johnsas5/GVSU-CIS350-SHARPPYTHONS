import Help from "./Help";

describe(Help, () => {

    it("Help page renders without crashing", () => {
        renderMatches(<Help />);
    });

});