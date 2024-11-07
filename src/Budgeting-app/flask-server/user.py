import server


class User:

    def __init__(self, user_token):
        self.data = authenticate_pull_request(user_token)
        self.categories = []
        self.income = self.data['TotalMonthlyIncome']
        self.categories.append(self.income)
        self.age = self.data['Age']
        self.categories.append(self.age)
        self.expenses = self.data['TotalMonthlyExpenses']
        self.housing = self.data['Housing']
        self.categories.append(self.housing)
        self.utilities = self.data['Utilities']
        self.categories.append(self.utilities)
        self.transportation = self.data['Transportation']
        self.categories.append(self.transportation)
        self.food = self.data['Food']
        self.categories.append(self.food)
        self.debt_repayment = self.data['Debt Repayment']
        self.categories.append(self.debt_repayment)
        self.insurance = self.data['Insurance']
        self.categories.append(self.insurance)
        self.health_and_wealth = self.data['Health and Wealth']
        self.categories.append(self.health_and_wealth)
        self.entertainment = self.data['Entertainment']
        self.categories.append(self.entertainment)
        self.education = self.data['Education']
        self.categories.append(self.education)
        self.investments = self.data['Investments']
        self.categories.append(self.investments)
        self.family_expenses = self.data['Family Expenses']
        self.categories.append(self.family_expenses)
        self.other = self.data['Other']
        self.categories.append(self.other)

    def percent_of_total_expenses(self):
        result = []
        if self.expenses > 0:
            for i in self.categories:
                result.append(i)
            return result
        return 0

