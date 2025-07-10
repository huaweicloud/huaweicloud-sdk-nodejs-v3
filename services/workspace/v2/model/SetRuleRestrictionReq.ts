

export class SetRuleRestrictionReq {
    private 'app_restrict_rule_switch'?: boolean;
    private 'app_control_mode'?: number;
    private 'app_periodic_switch'?: boolean;
    private 'app_periodic_interval'?: number;
    private 'app_force_kill_proc_switch'?: boolean;
    public constructor(appRestrictRuleSwitch?: boolean) { 
        this['app_restrict_rule_switch'] = appRestrictRuleSwitch;
    }
    public withAppRestrictRuleSwitch(appRestrictRuleSwitch: boolean): SetRuleRestrictionReq {
        this['app_restrict_rule_switch'] = appRestrictRuleSwitch;
        return this;
    }
    public set appRestrictRuleSwitch(appRestrictRuleSwitch: boolean  | undefined) {
        this['app_restrict_rule_switch'] = appRestrictRuleSwitch;
    }
    public get appRestrictRuleSwitch(): boolean | undefined {
        return this['app_restrict_rule_switch'];
    }
    public withAppControlMode(appControlMode: number): SetRuleRestrictionReq {
        this['app_control_mode'] = appControlMode;
        return this;
    }
    public set appControlMode(appControlMode: number  | undefined) {
        this['app_control_mode'] = appControlMode;
    }
    public get appControlMode(): number | undefined {
        return this['app_control_mode'];
    }
    public withAppPeriodicSwitch(appPeriodicSwitch: boolean): SetRuleRestrictionReq {
        this['app_periodic_switch'] = appPeriodicSwitch;
        return this;
    }
    public set appPeriodicSwitch(appPeriodicSwitch: boolean  | undefined) {
        this['app_periodic_switch'] = appPeriodicSwitch;
    }
    public get appPeriodicSwitch(): boolean | undefined {
        return this['app_periodic_switch'];
    }
    public withAppPeriodicInterval(appPeriodicInterval: number): SetRuleRestrictionReq {
        this['app_periodic_interval'] = appPeriodicInterval;
        return this;
    }
    public set appPeriodicInterval(appPeriodicInterval: number  | undefined) {
        this['app_periodic_interval'] = appPeriodicInterval;
    }
    public get appPeriodicInterval(): number | undefined {
        return this['app_periodic_interval'];
    }
    public withAppForceKillProcSwitch(appForceKillProcSwitch: boolean): SetRuleRestrictionReq {
        this['app_force_kill_proc_switch'] = appForceKillProcSwitch;
        return this;
    }
    public set appForceKillProcSwitch(appForceKillProcSwitch: boolean  | undefined) {
        this['app_force_kill_proc_switch'] = appForceKillProcSwitch;
    }
    public get appForceKillProcSwitch(): boolean | undefined {
        return this['app_force_kill_proc_switch'];
    }
}