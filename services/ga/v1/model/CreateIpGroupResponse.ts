import { IpGroupDetail } from './IpGroupDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateIpGroupResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'ip_group'?: IpGroupDetail;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CreateIpGroupResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withIpGroup(ipGroup: IpGroupDetail): CreateIpGroupResponse {
        this['ip_group'] = ipGroup;
        return this;
    }
    public set ipGroup(ipGroup: IpGroupDetail  | undefined) {
        this['ip_group'] = ipGroup;
    }
    public get ipGroup(): IpGroupDetail | undefined {
        return this['ip_group'];
    }
}