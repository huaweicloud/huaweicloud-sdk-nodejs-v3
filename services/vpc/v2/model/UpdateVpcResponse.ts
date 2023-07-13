import { Vpc } from './Vpc';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateVpcResponse extends SdkResponse {
    public vpc?: Vpc;
    public constructor() { 
        super();
    }
    public withVpc(vpc: Vpc): UpdateVpcResponse {
        this['vpc'] = vpc;
        return this;
    }
}