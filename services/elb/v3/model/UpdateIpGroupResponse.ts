import { IpGroup } from './IpGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateIpGroupResponse extends SdkResponse {
    public ipgroup?: IpGroup;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withIpgroup(ipgroup: IpGroup): UpdateIpGroupResponse {
        this['ipgroup'] = ipgroup;
        return this;
    }
    public withRequestId(requestId: string): UpdateIpGroupResponse {
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