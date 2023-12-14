import { ConsistencyResult } from './ConsistencyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConsistencyResultResponse extends SdkResponse {
    private 'consistency_result'?: Array<ConsistencyResult>;
    private 'finished_time'?: number;
    public constructor() { 
        super();
    }
    public withConsistencyResult(consistencyResult: Array<ConsistencyResult>): ShowConsistencyResultResponse {
        this['consistency_result'] = consistencyResult;
        return this;
    }
    public set consistencyResult(consistencyResult: Array<ConsistencyResult>  | undefined) {
        this['consistency_result'] = consistencyResult;
    }
    public get consistencyResult(): Array<ConsistencyResult> | undefined {
        return this['consistency_result'];
    }
    public withFinishedTime(finishedTime: number): ShowConsistencyResultResponse {
        this['finished_time'] = finishedTime;
        return this;
    }
    public set finishedTime(finishedTime: number  | undefined) {
        this['finished_time'] = finishedTime;
    }
    public get finishedTime(): number | undefined {
        return this['finished_time'];
    }
}