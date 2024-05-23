import { PolicySummaryDto } from './PolicySummaryDto';


export class PolicyDto {
    public content?: string;
    private 'policy_summary'?: PolicySummaryDto;
    public constructor(content?: string, policySummary?: PolicySummaryDto) { 
        this['content'] = content;
        this['policy_summary'] = policySummary;
    }
    public withContent(content: string): PolicyDto {
        this['content'] = content;
        return this;
    }
    public withPolicySummary(policySummary: PolicySummaryDto): PolicyDto {
        this['policy_summary'] = policySummary;
        return this;
    }
    public set policySummary(policySummary: PolicySummaryDto  | undefined) {
        this['policy_summary'] = policySummary;
    }
    public get policySummary(): PolicySummaryDto | undefined {
        return this['policy_summary'];
    }
}