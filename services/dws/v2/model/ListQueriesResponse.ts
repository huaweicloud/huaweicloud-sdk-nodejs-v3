import { ListQueriesData } from './ListQueriesData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQueriesResponse extends SdkResponse {
    public code?: number;
    public msg?: string;
    public data?: ListQueriesData;
    public count?: number;
    public constructor() { 
        super();
    }
    public withCode(code: number): ListQueriesResponse {
        this['code'] = code;
        return this;
    }
    public withMsg(msg: string): ListQueriesResponse {
        this['msg'] = msg;
        return this;
    }
    public withData(data: ListQueriesData): ListQueriesResponse {
        this['data'] = data;
        return this;
    }
    public withCount(count: number): ListQueriesResponse {
        this['count'] = count;
        return this;
    }
}