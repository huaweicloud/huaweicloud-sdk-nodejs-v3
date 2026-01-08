import { VpcInfo } from './VpcInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVpcInfoResponse extends SdkResponse {
    public vpcs?: Array<VpcInfo>;
    public constructor() { 
        super();
    }
    public withVpcs(vpcs: Array<VpcInfo>): ListVpcInfoResponse {
        this['vpcs'] = vpcs;
        return this;
    }
}