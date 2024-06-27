

export class ChSlowlogSensitiveResponse {
    private 'open_slow_log_switch'?: string;
    public constructor(openSlowLogSwitch?: string) { 
        this['open_slow_log_switch'] = openSlowLogSwitch;
    }
    public withOpenSlowLogSwitch(openSlowLogSwitch: string): ChSlowlogSensitiveResponse {
        this['open_slow_log_switch'] = openSlowLogSwitch;
        return this;
    }
    public set openSlowLogSwitch(openSlowLogSwitch: string  | undefined) {
        this['open_slow_log_switch'] = openSlowLogSwitch;
    }
    public get openSlowLogSwitch(): string | undefined {
        return this['open_slow_log_switch'];
    }
}