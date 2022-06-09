import { L7Policy } from './L7Policy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowL7PolicyResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    public l7policy?: L7Policy;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowL7PolicyResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withL7policy(l7policy: L7Policy): ShowL7PolicyResponse {
        this['l7policy'] = l7policy;
        return this;
    }
}