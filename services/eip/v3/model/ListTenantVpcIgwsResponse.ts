import { VpcIgwsTenantResp } from './VpcIgwsTenantResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTenantVpcIgwsResponse extends SdkResponse {
    private 'vpc_igws'?: Array<VpcIgwsTenantResp>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withVpcIgws(vpcIgws: Array<VpcIgwsTenantResp>): ListTenantVpcIgwsResponse {
        this['vpc_igws'] = vpcIgws;
        return this;
    }
    public set vpcIgws(vpcIgws: Array<VpcIgwsTenantResp>  | undefined) {
        this['vpc_igws'] = vpcIgws;
    }
    public get vpcIgws(): Array<VpcIgwsTenantResp> | undefined {
        return this['vpc_igws'];
    }
    public withRequestId(requestId: string): ListTenantVpcIgwsResponse {
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