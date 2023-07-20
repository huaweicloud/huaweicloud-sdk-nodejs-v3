

export class QueueScalingPoliciesResponse {
    public priority?: number;
    private 'impact_start_time'?: string;
    private 'impact_stop_time'?: string;
    private 'min_cu'?: number;
    private 'max_cu'?: number;
    public constructor() { 
    }
    public withPriority(priority: number): QueueScalingPoliciesResponse {
        this['priority'] = priority;
        return this;
    }
    public withImpactStartTime(impactStartTime: string): QueueScalingPoliciesResponse {
        this['impact_start_time'] = impactStartTime;
        return this;
    }
    public set impactStartTime(impactStartTime: string  | undefined) {
        this['impact_start_time'] = impactStartTime;
    }
    public get impactStartTime(): string | undefined {
        return this['impact_start_time'];
    }
    public withImpactStopTime(impactStopTime: string): QueueScalingPoliciesResponse {
        this['impact_stop_time'] = impactStopTime;
        return this;
    }
    public set impactStopTime(impactStopTime: string  | undefined) {
        this['impact_stop_time'] = impactStopTime;
    }
    public get impactStopTime(): string | undefined {
        return this['impact_stop_time'];
    }
    public withMinCu(minCu: number): QueueScalingPoliciesResponse {
        this['min_cu'] = minCu;
        return this;
    }
    public set minCu(minCu: number  | undefined) {
        this['min_cu'] = minCu;
    }
    public get minCu(): number | undefined {
        return this['min_cu'];
    }
    public withMaxCu(maxCu: number): QueueScalingPoliciesResponse {
        this['max_cu'] = maxCu;
        return this;
    }
    public set maxCu(maxCu: number  | undefined) {
        this['max_cu'] = maxCu;
    }
    public get maxCu(): number | undefined {
        return this['max_cu'];
    }
}