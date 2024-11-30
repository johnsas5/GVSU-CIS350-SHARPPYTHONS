import { MemoryRouter } from "react-router-dom";
import FinancialData from "./FinancialData";

describe(FinancialData, () => {

    it("Financial Data page displays the financial form", () => {
        renderMatches(
            <MemoryRouter>
                <FinancialData />
            </MemoryRouter>
        );
    });

});