import { StageRecord } from './StageRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTrainingJobStagesResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'running_records'?: Array<StageRecord>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListTrainingJobStagesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withRunningRecords(runningRecords: Array<StageRecord>): ListTrainingJobStagesResponse {
        this['running_records'] = runningRecords;
        return this;
    }
    public set runningRecords(runningRecords: Array<StageRecord>  | undefined) {
        this['running_records'] = runningRecords;
    }
    public get runningRecords(): Array<StageRecord> | undefined {
        return this['running_records'];
    }
}