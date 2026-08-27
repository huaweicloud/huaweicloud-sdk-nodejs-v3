

export class MysqlVolumeAutoExpandPolicy {
    private 'limit_size'?: number;
    private 'trigger_available_percent'?: number;
    private 'step_percent'?: number;
    public constructor() { 
    }
    public withLimitSize(limitSize: number): MysqlVolumeAutoExpandPolicy {
        this['limit_size'] = limitSize;
        return this;
    }
    public set limitSize(limitSize: number  | undefined) {
        this['limit_size'] = limitSize;
    }
    public get limitSize(): number | undefined {
        return this['limit_size'];
    }
    public withTriggerAvailablePercent(triggerAvailablePercent: number): MysqlVolumeAutoExpandPolicy {
        this['trigger_available_percent'] = triggerAvailablePercent;
        return this;
    }
    public set triggerAvailablePercent(triggerAvailablePercent: number  | undefined) {
        this['trigger_available_percent'] = triggerAvailablePercent;
    }
    public get triggerAvailablePercent(): number | undefined {
        return this['trigger_available_percent'];
    }
    public withStepPercent(stepPercent: number): MysqlVolumeAutoExpandPolicy {
        this['step_percent'] = stepPercent;
        return this;
    }
    public set stepPercent(stepPercent: number  | undefined) {
        this['step_percent'] = stepPercent;
    }
    public get stepPercent(): number | undefined {
        return this['step_percent'];
    }
}