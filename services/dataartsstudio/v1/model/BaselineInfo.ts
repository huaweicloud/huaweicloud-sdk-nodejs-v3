

export class BaselineInfo {
    private 'baseline_id'?: string;
    private 'baseline_name'?: string;
    private 'sla_time'?: number;
    private 'exp_time'?: number;
    public constructor() { 
    }
    public withBaselineId(baselineId: string): BaselineInfo {
        this['baseline_id'] = baselineId;
        return this;
    }
    public set baselineId(baselineId: string  | undefined) {
        this['baseline_id'] = baselineId;
    }
    public get baselineId(): string | undefined {
        return this['baseline_id'];
    }
    public withBaselineName(baselineName: string): BaselineInfo {
        this['baseline_name'] = baselineName;
        return this;
    }
    public set baselineName(baselineName: string  | undefined) {
        this['baseline_name'] = baselineName;
    }
    public get baselineName(): string | undefined {
        return this['baseline_name'];
    }
    public withSlaTime(slaTime: number): BaselineInfo {
        this['sla_time'] = slaTime;
        return this;
    }
    public set slaTime(slaTime: number  | undefined) {
        this['sla_time'] = slaTime;
    }
    public get slaTime(): number | undefined {
        return this['sla_time'];
    }
    public withExpTime(expTime: number): BaselineInfo {
        this['exp_time'] = expTime;
        return this;
    }
    public set expTime(expTime: number  | undefined) {
        this['exp_time'] = expTime;
    }
    public get expTime(): number | undefined {
        return this['exp_time'];
    }
}