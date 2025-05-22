import { IssueStatusResponseV4 } from './IssueStatusResponseV4';


export class IssueCompletionRateResponseV4 {
    private 'issue_status'?: IssueStatusResponseV4;
    private 'tracker_id'?: number;
    public constructor() { 
    }
    public withIssueStatus(issueStatus: IssueStatusResponseV4): IssueCompletionRateResponseV4 {
        this['issue_status'] = issueStatus;
        return this;
    }
    public set issueStatus(issueStatus: IssueStatusResponseV4  | undefined) {
        this['issue_status'] = issueStatus;
    }
    public get issueStatus(): IssueStatusResponseV4 | undefined {
        return this['issue_status'];
    }
    public withTrackerId(trackerId: number): IssueCompletionRateResponseV4 {
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