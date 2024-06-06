

export class UpdateSlowlogSensitiveSwitchRequestBody {
    private 'open_slow_log_switch'?: boolean;
    public constructor(openSlowLogSwitch?: boolean) { 
        this['open_slow_log_switch'] = openSlowLogSwitch;
    }
    public withOpenSlowLogSwitch(openSlowLogSwitch: boolean): UpdateSlowlogSensitiveSwitchRequestBody {
        this['open_slow_log_switch'] = openSlowLogSwitch;
        return this;
    }
    public set openSlowLogSwitch(openSlowLogSwitch: boolean  | undefined) {
        this['open_slow_log_switch'] = openSlowLogSwitch;
    }
    public get openSlowLogSwitch(): boolean | undefined {
        return this['open_slow_log_switch'];
    }
}