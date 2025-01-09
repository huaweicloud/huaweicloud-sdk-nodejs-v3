

export class TerminalsBindingDesktopsConfig {
    private 'tc_bind_switch'?: TerminalsBindingDesktopsConfigTcBindSwitchEnum | string;
    private 'tc_auto_bind_switch'?: TerminalsBindingDesktopsConfigTcAutoBindSwitchEnum | string;
    private 'tc_auto_bind_max'?: number;
    public constructor(tcBindSwitch?: string) { 
        this['tc_bind_switch'] = tcBindSwitch;
    }
    public withTcBindSwitch(tcBindSwitch: TerminalsBindingDesktopsConfigTcBindSwitchEnum | string): TerminalsBindingDesktopsConfig {
        this['tc_bind_switch'] = tcBindSwitch;
        return this;
    }
    public set tcBindSwitch(tcBindSwitch: TerminalsBindingDesktopsConfigTcBindSwitchEnum | string  | undefined) {
        this['tc_bind_switch'] = tcBindSwitch;
    }
    public get tcBindSwitch(): TerminalsBindingDesktopsConfigTcBindSwitchEnum | string | undefined {
        return this['tc_bind_switch'];
    }
    public withTcAutoBindSwitch(tcAutoBindSwitch: TerminalsBindingDesktopsConfigTcAutoBindSwitchEnum | string): TerminalsBindingDesktopsConfig {
        this['tc_auto_bind_switch'] = tcAutoBindSwitch;
        return this;
    }
    public set tcAutoBindSwitch(tcAutoBindSwitch: TerminalsBindingDesktopsConfigTcAutoBindSwitchEnum | string  | undefined) {
        this['tc_auto_bind_switch'] = tcAutoBindSwitch;
    }
    public get tcAutoBindSwitch(): TerminalsBindingDesktopsConfigTcAutoBindSwitchEnum | string | undefined {
        return this['tc_auto_bind_switch'];
    }
    public withTcAutoBindMax(tcAutoBindMax: number): TerminalsBindingDesktopsConfig {
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
export enum TerminalsBindingDesktopsConfigTcBindSwitchEnum {
    ON = 'ON',
    OFF = 'OFF'
}
/**
    * @export
    * @enum {string}
    */
export enum TerminalsBindingDesktopsConfigTcAutoBindSwitchEnum {
    ON = 'ON',
    OFF = 'OFF'
}
