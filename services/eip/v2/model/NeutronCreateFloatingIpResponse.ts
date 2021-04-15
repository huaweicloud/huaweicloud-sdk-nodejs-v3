import { PostAndPutFloatingIpResp } from './PostAndPutFloatingIpResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronCreateFloatingIpResponse extends SdkResponse {
    public floatingip?: PostAndPutFloatingIpResp;
    public constructor() { 
        super();
    }
    public withFloatingip(floatingip: PostAndPutFloatingIpResp): NeutronCreateFloatingIpResponse {
        this['floatingip'] = floatingip;
        return this;
    }
}