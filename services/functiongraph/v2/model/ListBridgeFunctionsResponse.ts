import { ListFunctionResult } from './ListFunctionResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBridgeFunctionsResponse extends SdkResponse {
    public body?: Array<ListFunctionResult>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ListFunctionResult>): ListBridgeFunctionsResponse {
        this['body'] = body;
        return this;
    }
}