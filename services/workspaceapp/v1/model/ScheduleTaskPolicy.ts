

export class ScheduleTaskPolicy {
    private 'enforcement_enable'?: boolean;
    public constructor() { 
    }
    public withEnforcementEnable(enforcementEnable: boolean): ScheduleTaskPolicy {
        this['enforcement_enable'] = enforcementEnable;
        return this;
    }
    public set enforcementEnable(enforcementEnable: boolean  | undefined) {
        this['enforcement_enable'] = enforcementEnable;
    }
    public get enforcementEnable(): boolean | undefined {
        return this['enforcement_enable'];
    }
}