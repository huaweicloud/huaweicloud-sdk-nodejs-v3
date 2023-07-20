

export class TaurusModifyInstanceMonitorRequestBody {
    private 'monitor_switch'?: boolean;
    public period?: TaurusModifyInstanceMonitorRequestBodyPeriodEnum | number;
    public constructor(monitorSwitch?: boolean) { 
        this['monitor_switch'] = monitorSwitch;
    }
    public withMonitorSwitch(monitorSwitch: boolean): TaurusModifyInstanceMonitorRequestBody {
        this['monitor_switch'] = monitorSwitch;
        return this;
    }
    public set monitorSwitch(monitorSwitch: boolean  | undefined) {
        this['monitor_switch'] = monitorSwitch;
    }
    public get monitorSwitch(): boolean | undefined {
        return this['monitor_switch'];
    }
    public withPeriod(period: TaurusModifyInstanceMonitorRequestBodyPeriodEnum | number): TaurusModifyInstanceMonitorRequestBody {
        this['period'] = period;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TaurusModifyInstanceMonitorRequestBodyPeriodEnum {
    NUMBER_1 = 1,
    NUMBER_5 = 5
}
