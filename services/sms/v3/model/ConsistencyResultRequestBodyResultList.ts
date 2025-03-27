import { ConsistencyResult } from './ConsistencyResult';


export class ConsistencyResultRequestBodyResultList {
    private 'finished_time'?: number;
    private 'check_result'?: string;
    private 'consistency_result'?: Array<ConsistencyResult>;
    public constructor() { 
    }
    public withFinishedTime(finishedTime: number): ConsistencyResultRequestBodyResultList {
        this['finished_time'] = finishedTime;
        return this;
    }
    public set finishedTime(finishedTime: number  | undefined) {
        this['finished_time'] = finishedTime;
    }
    public get finishedTime(): number | undefined {
        return this['finished_time'];
    }
    public withCheckResult(checkResult: string): ConsistencyResultRequestBodyResultList {
        this['check_result'] = checkResult;
        return this;
    }
    public set checkResult(checkResult: string  | undefined) {
        this['check_result'] = checkResult;
    }
    public get checkResult(): string | undefined {
        return this['check_result'];
    }
    public withConsistencyResult(consistencyResult: Array<ConsistencyResult>): ConsistencyResultRequestBodyResultList {
        this['consistency_result'] = consistencyResult;
        return this;
    }
    public set consistencyResult(consistencyResult: Array<ConsistencyResult>  | undefined) {
        this['consistency_result'] = consistencyResult;
    }
    public get consistencyResult(): Array<ConsistencyResult> | undefined {
        return this['consistency_result'];
    }
}