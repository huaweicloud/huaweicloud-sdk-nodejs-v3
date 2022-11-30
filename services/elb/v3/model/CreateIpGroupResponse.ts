import { IpGroup } from './IpGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateIpGroupResponse extends SdkResponse {
    public ipgroup?: IpGroup;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withIpgroup(ipgroup: IpGroup): CreateIpGroupResponse {
        this['ipgroup'] = ipgroup;
        return this;
    }
    public withRequestId(requestId: string): CreateIpGroupResponse {
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