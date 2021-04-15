import { FloatingIpResp } from './FloatingIpResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronShowFloatingIpResponse extends SdkResponse {
    public floatingip?: FloatingIpResp;
    public constructor() { 
        super();
    }
    public withFloatingip(floatingip: FloatingIpResp): NeutronShowFloatingIpResponse {
        this['floatingip'] = floatingip;
        return this;
    }
}