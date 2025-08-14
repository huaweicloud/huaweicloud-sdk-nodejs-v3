

export class QueueScalingPolicy {
    public priority?: number;
    private 'impact_start_time'?: string;
    private 'impact_stop_time'?: string;
    private 'min_cu'?: number;
    private 'max_cu'?: number;
    private 'inherit_elastic_resource_pool_max_cu'?: boolean;
    public constructor(priority?: number, impactStartTime?: string, impactStopTime?: string, minCu?: number, maxCu?: number) { 
        this['priority'] = priority;
        this['impact_start_time'] = impactStartTime;
        this['impact_stop_time'] = impactStopTime;
        this['min_cu'] = minCu;
        this['max_cu'] = maxCu;
    }
    public withPriority(priority: number): QueueScalingPolicy {
        this['priority'] = priority;
        return this;
    }
    public withImpactStartTime(impactStartTime: string): QueueScalingPolicy {
        this['impact_start_time'] = impactStartTime;
        return this;
    }
    public set impactStartTime(impactStartTime: string  | undefined) {
        this['impact_start_time'] = impactStartTime;
    }
    public get impactStartTime(): string | undefined {
        return this['impact_start_time'];
    }
    public withImpactStopTime(impactStopTime: string): QueueScalingPolicy {
        this['impact_stop_time'] = impactStopTime;
        return this;
    }
    public set impactStopTime(impactStopTime: string  | undefined) {
        this['impact_stop_time'] = impactStopTime;
    }
    public get impactStopTime(): string | undefined {
        return this['impact_stop_time'];
    }
    public withMinCu(minCu: number): QueueScalingPolicy {
        this['min_cu'] = minCu;
        return this;
    }
    public set minCu(minCu: number  | undefined) {
        this['min_cu'] = minCu;
    }
    public get minCu(): number | undefined {
        return this['min_cu'];
    }
    public withMaxCu(maxCu: number): QueueScalingPolicy {
        this['max_cu'] = maxCu;
        return this;
    }
    public set maxCu(maxCu: number  | undefined) {
        this['max_cu'] = maxCu;
    }
    public get maxCu(): number | undefined {
        return this['max_cu'];
    }
    public withInheritElasticResourcePoolMaxCu(inheritElasticResourcePoolMaxCu: boolean): QueueScalingPolicy {
        this['inherit_elastic_resource_pool_max_cu'] = inheritElasticResourcePoolMaxCu;
        return this;
    }
    public set inheritElasticResourcePoolMaxCu(inheritElasticResourcePoolMaxCu: boolean  | undefined) {
        this['inherit_elastic_resource_pool_max_cu'] = inheritElasticResourcePoolMaxCu;
    }
    public get inheritElasticResourcePoolMaxCu(): boolean | undefined {
        return this['inherit_elastic_resource_pool_max_cu'];
    }
}