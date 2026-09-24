import { MysqlAutoScalingRecord } from './MysqlAutoScalingRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAutoScalingHistoryResponse extends SdkResponse {
    private 'total_count'?: number;
    public records?: Array<MysqlAutoScalingRecord>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListAutoScalingHistoryResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withRecords(records: Array<MysqlAutoScalingRecord>): ListAutoScalingHistoryResponse {
        this['records'] = records;
        return this;
    }
}