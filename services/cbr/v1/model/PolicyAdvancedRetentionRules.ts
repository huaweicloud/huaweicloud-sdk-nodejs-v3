import { PolicyMonthlyRetentionRules } from './PolicyMonthlyRetentionRules';
import { PolicyWeeklyRetentionRules } from './PolicyWeeklyRetentionRules';
import { PolicyYearlyRetentionRules } from './PolicyYearlyRetentionRules';


export class PolicyAdvancedRetentionRules {
    private 'weekly_retention_rules'?: PolicyWeeklyRetentionRules;
    private 'monthly_retention_rules'?: PolicyMonthlyRetentionRules;
    private 'yearly_retention_rules'?: PolicyYearlyRetentionRules;
    public constructor() { 
    }
    public withWeeklyRetentionRules(weeklyRetentionRules: PolicyWeeklyRetentionRules): PolicyAdvancedRetentionRules {
        this['weekly_retention_rules'] = weeklyRetentionRules;
        return this;
    }
    public set weeklyRetentionRules(weeklyRetentionRules: PolicyWeeklyRetentionRules  | undefined) {
        this['weekly_retention_rules'] = weeklyRetentionRules;
    }
    public get weeklyRetentionRules(): PolicyWeeklyRetentionRules | undefined {
        return this['weekly_retention_rules'];
    }
    public withMonthlyRetentionRules(monthlyRetentionRules: PolicyMonthlyRetentionRules): PolicyAdvancedRetentionRules {
        this['monthly_retention_rules'] = monthlyRetentionRules;
        return this;
    }
    public set monthlyRetentionRules(monthlyRetentionRules: PolicyMonthlyRetentionRules  | undefined) {
        this['monthly_retention_rules'] = monthlyRetentionRules;
    }
    public get monthlyRetentionRules(): PolicyMonthlyRetentionRules | undefined {
        return this['monthly_retention_rules'];
    }
    public withYearlyRetentionRules(yearlyRetentionRules: PolicyYearlyRetentionRules): PolicyAdvancedRetentionRules {
        this['yearly_retention_rules'] = yearlyRetentionRules;
        return this;
    }
    public set yearlyRetentionRules(yearlyRetentionRules: PolicyYearlyRetentionRules  | undefined) {
        this['yearly_retention_rules'] = yearlyRetentionRules;
    }
    public get yearlyRetentionRules(): PolicyYearlyRetentionRules | undefined {
        return this['yearly_retention_rules'];
    }
}