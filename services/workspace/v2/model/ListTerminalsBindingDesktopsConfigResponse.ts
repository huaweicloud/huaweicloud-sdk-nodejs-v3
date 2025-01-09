
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTerminalsBindingDesktopsConfigResponse extends SdkResponse {
    private 'tc_bind_switch'?: ListTerminalsBindingDesktopsConfigResponseTcBindSwitchEnum | string;
    private 'tc_auto_bind_switch'?: ListTerminalsBindingDesktopsConfigResponseTcAutoBindSwitchEnum | string;
    private 'tc_auto_bind_max'?: number;
    public constructor() { 
        super();
    }
    public withTcBindSwitch(tcBindSwitch: ListTerminalsBindingDesktopsConfigResponseTcBindSwitchEnum | string): ListTerminalsBindingDesktopsConfigResponse {
        this['tc_bind_switch'] = tcBindSwitch;
        return this;
    }
    public set tcBindSwitch(tcBindSwitch: ListTerminalsBindingDesktopsConfigResponseTcBindSwitchEnum | string  | undefined) {
        this['tc_bind_switch'] = tcBindSwitch;
    }
    public get tcBindSwitch(): ListTerminalsBindingDesktopsConfigResponseTcBindSwitchEnum | string | undefined {
        return this['tc_bind_switch'];
    }
    public withTcAutoBindSwitch(tcAutoBindSwitch: ListTerminalsBindingDesktopsConfigResponseTcAutoBindSwitchEnum | string): ListTerminalsBindingDesktopsConfigResponse {
        this['tc_auto_bind_switch'] = tcAutoBindSwitch;
        return this;
    }
    public set tcAutoBindSwitch(tcAutoBindSwitch: ListTerminalsBindingDesktopsConfigResponseTcAutoBindSwitchEnum | string  | undefined) {
        this['tc_auto_bind_switch'] = tcAutoBindSwitch;
    }
    public get tcAutoBindSwitch(): ListTerminalsBindingDesktopsConfigResponseTcAutoBindSwitchEnum | string | undefined {
        return this['tc_auto_bind_switch'];
    }
    public withTcAutoBindMax(tcAutoBindMax: number): ListTerminalsBindingDesktopsConfigResponse {
        this['tc_auto_bind_max'] = tcAutoBindMax;
        return this;
    }
    public set tcAutoBindMax(tcAutoBindMax: number  | undefined) {
        this['tc_auto_bind_max'] = tcAutoBindMax;
    }
    public get tcAutoBindMax(): number | undefined {
        return this['tc_auto_bind_max'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTerminalsBindingDesktopsConfigResponseTcBindSwitchEnum {
    ON = 'ON',
    OFF = 'OFF'
}
/**
    * @export
    * @enum {string}
    */
export enum ListTerminalsBindingDesktopsConfigResponseTcAutoBindSwitchEnum {
    ON = 'ON',
    OFF = 'OFF'
}
