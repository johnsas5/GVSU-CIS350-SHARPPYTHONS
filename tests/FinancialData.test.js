import { MemoryRouter } from "react-router-dom";
import FinancialData from "../src/Budgeting-app/client/src/FinancialData/FinancialData";

describe(FinancialData, () => {

    it("Financial Data page displays the financial form", () => {
        renderMatches(<FinancialData />);
    });

});