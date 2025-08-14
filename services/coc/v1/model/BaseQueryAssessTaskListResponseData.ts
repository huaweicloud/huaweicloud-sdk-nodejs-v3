import { QueryAssessTaskResponse } from './QueryAssessTaskResponse';


export class BaseQueryAssessTaskListResponseData {
    public total?: number;
    public result?: Array<QueryAssessTaskResponse>;
    public constructor() { 
    }
    public withTotal(total: number): BaseQueryAssessTaskListResponseData {
        this['total'] = total;
        return this;
    }
    public withResult(result: Array<QueryAssessTaskResponse>): BaseQueryAssessTaskListResponseData {
        this['result'] = result;
        return this;
    }
}