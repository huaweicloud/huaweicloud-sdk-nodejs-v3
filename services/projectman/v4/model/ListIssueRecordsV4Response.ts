import { IssueRecordV4 } from './IssueRecordV4';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIssueRecordsV4Response extends SdkResponse {
    public id?: number;
    private 'created_time'?: number;
    public records?: Array<IssueRecordV4>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withId(id: number): ListIssueRecordsV4Response {
        this['id'] = id;
        return this;
    }
    public withCreatedTime(createdTime: number): ListIssueRecordsV4Response {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: number  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): number | undefined {
        return this['created_time'];
    }
    public withRecords(records: Array<IssueRecordV4>): ListIssueRecordsV4Response {
        this['records'] = records;
        return this;
    }
    public withTotal(total: number): ListIssueRecordsV4Response {
        this['total'] = total;
        return this;
    }
}