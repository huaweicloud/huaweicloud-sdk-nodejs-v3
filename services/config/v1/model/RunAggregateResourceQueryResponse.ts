import { QueryInfo } from './QueryInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunAggregateResourceQueryResponse extends SdkResponse {
    private 'query_info'?: QueryInfo | undefined;
    public results?: Array<object>;
    public constructor() { 
        super();
    }
    public withQueryInfo(queryInfo: QueryInfo): RunAggregateResourceQueryResponse {
        this['query_info'] = queryInfo;
        return this;
    }
    public set queryInfo(queryInfo: QueryInfo | undefined) {
        this['query_info'] = queryInfo;
    }
    public get queryInfo() {
        return this['query_info'];
    }
    public withResults(results: Array<object>): RunAggregateResourceQueryResponse {
        this['results'] = results;
        return this;
    }
}