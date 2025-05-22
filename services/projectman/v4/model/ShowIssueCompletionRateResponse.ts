import { IssueCompletionRateV4IssueCompletionRates } from './IssueCompletionRateV4IssueCompletionRates';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIssueCompletionRateResponse extends SdkResponse {
    private 'issue_completion_rates'?: Array<IssueCompletionRateV4IssueCompletionRates>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withIssueCompletionRates(issueCompletionRates: Array<IssueCompletionRateV4IssueCompletionRates>): ShowIssueCompletionRateResponse {
        this['issue_completion_rates'] = issueCompletionRates;
        return this;
    }
    public set issueCompletionRates(issueCompletionRates: Array<IssueCompletionRateV4IssueCompletionRates>  | undefined) {
        this['issue_completion_rates'] = issueCompletionRates;
    }
    public get issueCompletionRates(): Array<IssueCompletionRateV4IssueCompletionRates> | undefined {
        return this['issue_completion_rates'];
    }
    public withTotal(total: number): ShowIssueCompletionRateResponse {
        this['total'] = total;
        return this;
    }
}