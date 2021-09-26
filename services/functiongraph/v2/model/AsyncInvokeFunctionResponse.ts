
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AsyncInvokeFunctionResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): AsyncInvokeFunctionResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
}