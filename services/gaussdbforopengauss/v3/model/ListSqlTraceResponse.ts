import { NodeExecutionInfoResult } from './NodeExecutionInfoResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSqlTraceResponse extends SdkResponse {
    public body?: Array<NodeExecutionInfoResult>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<NodeExecutionInfoResult>): ListSqlTraceResponse {
        this['body'] = body;
        return this;
    }
}