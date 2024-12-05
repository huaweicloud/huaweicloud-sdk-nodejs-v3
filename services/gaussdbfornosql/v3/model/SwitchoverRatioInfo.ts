

export class SwitchoverRatioInfo {
    private 'instance_id'?: string;
    private 'switchover_ratio'?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SwitchoverRatioInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withSwitchoverRatio(switchoverRatio: number): SwitchoverRatioInfo {
        this['switchover_ratio'] = switchoverRatio;
        return this;
    }
    public set switchoverRatio(switchoverRatio: number  | undefined) {
        this['switchover_ratio'] = switchoverRatio;
    }
    public get switchoverRatio(): number | undefined {
        return this['switchover_ratio'];
    }
}