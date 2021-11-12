import { Vpc } from './Vpc';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVpcResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    public vpc?: Vpc;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowVpcResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withVpc(vpc: Vpc): ShowVpcResponse {
        this['vpc'] = vpc;
        return this;
    }
}