import { QueryReq } from './QueryReq';


export class BatchAddFullSqlTasksRequestBody {
    private 'query_reqs'?: Array<QueryReq>;
    public constructor(queryReqs?: Array<QueryReq>) { 
        this['query_reqs'] = queryReqs;
    }
    public withQueryReqs(queryReqs: Array<QueryReq>): BatchAddFullSqlTasksRequestBody {
        this['query_reqs'] = queryReqs;
        return this;
    }
    public set queryReqs(queryReqs: Array<QueryReq>  | undefined) {
        this['query_reqs'] = queryReqs;
    }
    public get queryReqs(): Array<QueryReq> | undefined {
        return this['query_reqs'];
    }
}