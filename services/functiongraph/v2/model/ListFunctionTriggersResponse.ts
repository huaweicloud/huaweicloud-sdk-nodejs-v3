import { ListFunctionTriggerResult } from './ListFunctionTriggerResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFunctionTriggersResponse extends SdkResponse {
    public body?: Array<ListFunctionTriggerResult>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ListFunctionTriggerResult>): ListFunctionTriggersResponse {
        this['body'] = body;
        return this;
    }
}