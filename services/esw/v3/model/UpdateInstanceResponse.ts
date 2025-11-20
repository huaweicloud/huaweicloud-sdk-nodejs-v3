import { Instance } from './Instance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateInstanceResponse extends SdkResponse {
    private 'request_id'?: string;
    public instance?: Instance;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): UpdateInstanceResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withInstance(instance: Instance): UpdateInstanceResponse {
        this['instance'] = instance;
        return this;
    }
}