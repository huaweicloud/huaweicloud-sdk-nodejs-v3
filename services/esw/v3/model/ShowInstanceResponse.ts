import { Instance } from './Instance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceResponse extends SdkResponse {
    public instance?: Instance;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withInstance(instance: Instance): ShowInstanceResponse {
        this['instance'] = instance;
        return this;
    }
    public withRequestId(requestId: string): ShowInstanceResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}