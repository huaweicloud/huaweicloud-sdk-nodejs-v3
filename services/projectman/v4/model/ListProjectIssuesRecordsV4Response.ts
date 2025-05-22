import { IssueAttrHistoryRecord } from './IssueAttrHistoryRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectIssuesRecordsV4Response extends SdkResponse {
    public records?: Array<IssueAttrHistoryRecord>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withRecords(records: Array<IssueAttrHistoryRecord>): ListProjectIssuesRecordsV4Response {
        this['records'] = records;
        return this;
    }
    public withTotal(total: number): ListProjectIssuesRecordsV4Response {
        this['total'] = total;
        return this;
    }
}