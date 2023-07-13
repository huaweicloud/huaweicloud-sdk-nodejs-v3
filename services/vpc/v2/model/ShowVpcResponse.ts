import { Vpc } from './Vpc';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVpcResponse extends SdkResponse {
    public vpc?: Vpc;
    public constructor() { 
        super();
    }
    public withVpc(vpc: Vpc): ShowVpcResponse {
        this['vpc'] = vpc;
        return this;
    }
}