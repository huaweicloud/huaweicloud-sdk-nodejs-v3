import { ConsistencyResult } from './ConsistencyResult';


export class ConsistencyResultRequestBody {
    private 'consistency_result'?: Array<ConsistencyResult>;
    private 'finished_time'?: number;
    public constructor(consistencyResult?: Array<ConsistencyResult>) { 
        this['consistency_result'] = consistencyResult;
    }
    public withConsistencyResult(consistencyResult: Array<ConsistencyResult>): ConsistencyResultRequestBody {
        this['consistency_result'] = consistencyResult;
        return this;
    }
    public set consistencyResult(consistencyResult: Array<ConsistencyResult>  | undefined) {
        this['consistency_result'] = consistencyResult;
    }
    public get consistencyResult(): Array<ConsistencyResult> | undefined {
        return this['consistency_result'];
    }
    public withFinishedTime(finishedTime: number): ConsistencyResultRequestBody {
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