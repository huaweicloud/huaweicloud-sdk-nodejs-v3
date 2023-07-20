import { QueryInfo } from './QueryInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunQueryResponse extends SdkResponse {
    private 'query_info'?: QueryInfo;
    public results?: Array<object>;
    public constructor() { 
        super();
    }
    public withQueryInfo(queryInfo: QueryInfo): RunQueryResponse {
        this['query_info'] = queryInfo;
        return this;
    }
    public set queryInfo(queryInfo: QueryInfo  | undefined) {
        this['query_info'] = queryInfo;
    }
    public get queryInfo(): QueryInfo | undefined {
        return this['query_info'];
    }
    public withResults(results: Array<object>): RunQueryResponse {
        this['results'] = results;
        return this;
    }
}