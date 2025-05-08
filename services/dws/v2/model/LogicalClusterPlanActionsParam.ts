

export class LogicalClusterPlanActionsParam {
    public type?: string;
    public strategy?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): LogicalClusterPlanActionsParam {
        this['type'] = type;
        return this;
    }
    public withStrategy(strategy: string): LogicalClusterPlanActionsParam {
        this['strategy'] = strategy;
        return this;
    }
}