import { ConsistencyResult } from './ConsistencyResult';


export class SetConsistencyResultRequestBody {
    private 'consistency_result'?: Array<ConsistencyResult>;
    public constructor() { 
    }
    public withConsistencyResult(consistencyResult: Array<ConsistencyResult>): SetConsistencyResultRequestBody {
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