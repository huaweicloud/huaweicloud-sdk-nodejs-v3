import { Vpc } from './Vpc';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RemoveVpcExtendCidrResponse extends SdkResponse {
    public vpc?: Vpc;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withVpc(vpc: Vpc): RemoveVpcExtendCidrResponse {
        this['vpc'] = vpc;
        return this;
    }
    public withRequestId(requestId: string): RemoveVpcExtendCidrResponse {
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