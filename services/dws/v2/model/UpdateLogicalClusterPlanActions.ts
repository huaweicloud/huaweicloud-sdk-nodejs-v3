

export class UpdateLogicalClusterPlanActions {
    public id?: string;
    public type?: string;
    public strategy?: string;
    public constructor() { 
    }
    public withId(id: string): UpdateLogicalClusterPlanActions {
        this['id'] = id;
        return this;
    }
    public withType(type: string): UpdateLogicalClusterPlanActions {
        this['type'] = type;
        return this;
    }
    public withStrategy(strategy: string): UpdateLogicalClusterPlanActions {
        this['strategy'] = strategy;
        return this;
    }
}