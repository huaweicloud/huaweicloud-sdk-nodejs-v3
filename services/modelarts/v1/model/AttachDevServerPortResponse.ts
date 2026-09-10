
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AttachDevServerPortResponse extends SdkResponse {
    private 'mac_addr'?: string;
    private 'port_id'?: string;
    private 'port_state'?: AttachDevServerPortResponsePortStateEnum | string;
    private 'virsubnet_id'?: string;
    public constructor() { 
        super();
    }
    public withMacAddr(macAddr: string): AttachDevServerPortResponse {
        this['mac_addr'] = macAddr;
        return this;
    }
    public set macAddr(macAddr: string  | undefined) {
        this['mac_addr'] = macAddr;
    }
    public get macAddr(): string | undefined {
        return this['mac_addr'];
    }
    public withPortId(portId: string): AttachDevServerPortResponse {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withPortState(portState: AttachDevServerPortResponsePortStateEnum | string): AttachDevServerPortResponse {
        this['port_state'] = portState;
        return this;
    }
    public set portState(portState: AttachDevServerPortResponsePortStateEnum | string  | undefined) {
        this['port_state'] = portState;
    }
    public get portState(): AttachDevServerPortResponsePortStateEnum | string | undefined {
        return this['port_state'];
    }
    public withVirsubnetId(virsubnetId: string): AttachDevServerPortResponse {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): string | undefined {
        return this['virsubnet_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AttachDevServerPortResponsePortStateEnum {
    ACTIVE = 'ACTIVE',
    BUILD = 'BUILD',
    DOWN = 'DOWN'
}
