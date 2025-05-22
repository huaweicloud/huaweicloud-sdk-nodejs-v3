import { IssueCompletionRateV4IssueStatus } from './IssueCompletionRateV4IssueStatus';


export class IssueCompletionRateV4IssueCompletionRates {
    private 'issue_status'?: IssueCompletionRateV4IssueStatus;
    private 'tracker_id'?: number;
    public constructor() { 
    }
    public withIssueStatus(issueStatus: IssueCompletionRateV4IssueStatus): IssueCompletionRateV4IssueCompletionRates {
        this['issue_status'] = issueStatus;
        return this;
    }
    public set issueStatus(issueStatus: IssueCompletionRateV4IssueStatus  | undefined) {
        this['issue_status'] = issueStatus;
    }
    public get issueStatus(): IssueCompletionRateV4IssueStatus | undefined {
        return this['issue_status'];
    }
    public withTrackerId(trackerId: number): IssueCompletionRateV4IssueCompletionRates {
        this['tracker_id'] = trackerId;
        return this;
    }
    public set trackerId(trackerId: number  | undefined) {
        this['tracker_id'] = trackerId;
    }
    public get trackerId(): number | undefined {
        return this['tracker_id'];
    }
}