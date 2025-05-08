

export class LogicalClusterPlanActions {
    private 'next_fire_time'?: string;
    private 'failed_reason'?: string;
    public id?: string;
    public type?: string;
    public strategy?: string;
    public status?: string;
    private 'pre_fire_time'?: string;
    public constructor() { 
    }
    public withNextFireTime(nextFireTime: string): LogicalClusterPlanActions {
        this['next_fire_time'] = nextFireTime;
        return this;
    }
    public set nextFireTime(nextFireTime: string  | undefined) {
        this['next_fire_time'] = nextFireTime;
    }
    public get nextFireTime(): string | undefined {
        return this['next_fire_time'];
    }
    public withFailedReason(failedReason: string): LogicalClusterPlanActions {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
    public withId(id: string): LogicalClusterPlanActions {
        this['id'] = id;
        return this;
    }
    public withType(type: string): LogicalClusterPlanActions {
        this['type'] = type;
        return this;
    }
    public withStrategy(strategy: string): LogicalClusterPlanActions {
        this['strategy'] = strategy;
        return this;
    }
    public withStatus(status: string): LogicalClusterPlanActions {
        this['status'] = status;
        return this;
    }
    public withPreFireTime(preFireTime: string): LogicalClusterPlanActions {
        this['pre_fire_time'] = preFireTime;
        return this;
    }
    public set preFireTime(preFireTime: string  | undefined) {
        this['pre_fire_time'] = preFireTime;
    }
    public get preFireTime(): string | undefined {
        return this['pre_fire_time'];
    }
}