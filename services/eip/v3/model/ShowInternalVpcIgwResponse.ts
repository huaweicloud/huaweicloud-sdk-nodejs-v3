import { VpcIgwsTenantResp } from './VpcIgwsTenantResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInternalVpcIgwResponse extends SdkResponse {
    private 'vpc_igw'?: VpcIgwsTenantResp;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withVpcIgw(vpcIgw: VpcIgwsTenantResp): ShowInternalVpcIgwResponse {
        this['vpc_igw'] = vpcIgw;
        return this;
    }
    public set vpcIgw(vpcIgw: VpcIgwsTenantResp  | undefined) {
        this['vpc_igw'] = vpcIgw;
    }
    public get vpcIgw(): VpcIgwsTenantResp | undefined {
        return this['vpc_igw'];
    }
    public withRequestId(requestId: string): ShowInternalVpcIgwResponse {
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