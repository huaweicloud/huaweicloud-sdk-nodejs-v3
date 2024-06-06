import { AutoScalingRecordInfo } from './AutoScalingRecordInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutoScalingHistoryResponse extends SdkResponse {
    private 'total_count'?: string;
    public records?: Array<AutoScalingRecordInfo>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: string): ShowAutoScalingHistoryResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: string  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): string | undefined {
        return this['total_count'];
    }
    public withRecords(records: Array<AutoScalingRecordInfo>): ShowAutoScalingHistoryResponse {
        this['records'] = records;
        return this;
    }
}