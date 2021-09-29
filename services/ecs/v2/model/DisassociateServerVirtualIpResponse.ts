
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisassociateServerVirtualIpResponse extends SdkResponse {
    private 'port_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withPortId(portId: string): DisassociateServerVirtualIpResponse {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string | undefined) {
        this['port_id'] = portId;
    }
    public get portId() {
        return this['port_id'];
    }
}