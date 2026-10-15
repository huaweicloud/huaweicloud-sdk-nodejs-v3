import { ReplayExecuteRecords } from './ReplayExecuteRecords';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowReplayRecordResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'sql_records'?: Array<ReplayExecuteRecords>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ShowReplayRecordResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withSqlRecords(sqlRecords: Array<ReplayExecuteRecords>): ShowReplayRecordResponse {
        this['sql_records'] = sqlRecords;
        return this;
    }
    public set sqlRecords(sqlRecords: Array<ReplayExecuteRecords>  | undefined) {
        this['sql_records'] = sqlRecords;
    }
    public get sqlRecords(): Array<ReplayExecuteRecords> | undefined {
        return this['sql_records'];
    }
}