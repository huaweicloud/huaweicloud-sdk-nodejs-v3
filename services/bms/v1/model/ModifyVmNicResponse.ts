
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyVmNicResponse extends SdkResponse {
    private 'port_id'?: string;
    public constructor() { 
        super();
    }
    public withPortId(portId: string): ModifyVmNicResponse {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
}