import { IpGroup } from './IpGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteIpListResponse extends SdkResponse {
    public ipgroup?: IpGroup;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withIpgroup(ipgroup: IpGroup): BatchDeleteIpListResponse {
        this['ipgroup'] = ipgroup;
        return this;
    }
    public withRequestId(requestId: string): BatchDeleteIpListResponse {
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