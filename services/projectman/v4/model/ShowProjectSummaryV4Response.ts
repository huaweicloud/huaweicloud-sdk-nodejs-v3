import { BugStatisticResponseV4 } from './BugStatisticResponseV4';
import { DemandStatisticResponseV4 } from './DemandStatisticResponseV4';
import { IssueCompletionRateResponseV4 } from './IssueCompletionRateResponseV4';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProjectSummaryV4Response extends SdkResponse {
    private 'bug_statistics'?: Array<BugStatisticResponseV4>;
    private 'demand_statistics'?: Array<DemandStatisticResponseV4>;
    private 'issue_completion_rates'?: Array<IssueCompletionRateResponseV4>;
    private 'project_id'?: string;
    public constructor() { 
        super();
    }
    public withBugStatistics(bugStatistics: Array<BugStatisticResponseV4>): ShowProjectSummaryV4Response {
        this['bug_statistics'] = bugStatistics;
        return this;
    }
    public set bugStatistics(bugStatistics: Array<BugStatisticResponseV4>  | undefined) {
        this['bug_statistics'] = bugStatistics;
    }
    public get bugStatistics(): Array<BugStatisticResponseV4> | undefined {
        return this['bug_statistics'];
    }
    public withDemandStatistics(demandStatistics: Array<DemandStatisticResponseV4>): ShowProjectSummaryV4Response {
        this['demand_statistics'] = demandStatistics;
        return this;
    }
    public set demandStatistics(demandStatistics: Array<DemandStatisticResponseV4>  | undefined) {
        this['demand_statistics'] = demandStatistics;
    }
    public get demandStatistics(): Array<DemandStatisticResponseV4> | undefined {
        return this['demand_statistics'];
    }
    public withIssueCompletionRates(issueCompletionRates: Array<IssueCompletionRateResponseV4>): ShowProjectSummaryV4Response {
        this['issue_completion_rates'] = issueCompletionRates;
        return this;
    }
    public set issueCompletionRates(issueCompletionRates: Array<IssueCompletionRateResponseV4>  | undefined) {
        this['issue_completion_rates'] = issueCompletionRates;
    }
    public get issueCompletionRates(): Array<IssueCompletionRateResponseV4> | undefined {
        return this['issue_completion_rates'];
    }
    public withProjectId(projectId: string): ShowProjectSummaryV4Response {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}