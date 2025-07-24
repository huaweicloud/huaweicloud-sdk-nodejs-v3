import { CheckRecordIssueCountsInfo } from './CheckRecordIssueCountsInfo';


export class CheckRecordDataInfo {
    private 'check_time'?: string;
    private 'check_end_time'?: string;
    private 'issue_counts'?: CheckRecordIssueCountsInfo;
    public constructor() { 
    }
    public withCheckTime(checkTime: string): CheckRecordDataInfo {
        this['check_time'] = checkTime;
        return this;
    }
    public set checkTime(checkTime: string  | undefined) {
        this['check_time'] = checkTime;
    }
    public get checkTime(): string | undefined {
        return this['check_time'];
    }
    public withCheckEndTime(checkEndTime: string): CheckRecordDataInfo {
        this['check_end_time'] = checkEndTime;
        return this;
    }
    public set checkEndTime(checkEndTime: string  | undefined) {
        this['check_end_time'] = checkEndTime;
    }
    public get checkEndTime(): string | undefined {
        return this['check_end_time'];
    }
    public withIssueCounts(issueCounts: CheckRecordIssueCountsInfo): CheckRecordDataInfo {
        this['issue_counts'] = issueCounts;
        return this;
    }
    public set issueCounts(issueCounts: CheckRecordIssueCountsInfo  | undefined) {
        this['issue_counts'] = issueCounts;
    }
    public get issueCounts(): CheckRecordIssueCountsInfo | undefined {
        return this['issue_counts'];
    }
}