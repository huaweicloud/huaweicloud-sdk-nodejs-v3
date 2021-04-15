import { PostAndPutFloatingIpResp } from './PostAndPutFloatingIpResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronUpdateFloatingIpResponse extends SdkResponse {
    public floatingip?: PostAndPutFloatingIpResp;
    public constructor() { 
        super();
    }
    public withFloatingip(floatingip: PostAndPutFloatingIpResp): NeutronUpdateFloatingIpResponse {
        this['floatingip'] = floatingip;
        return this;
    }
}