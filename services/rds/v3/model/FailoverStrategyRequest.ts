

export class FailoverStrategyRequest {
    public repairStrategy?: string;
    public constructor(repairStrategy?: string) { 
        this['repairStrategy'] = repairStrategy;
    }
    public withRepairStrategy(repairStrategy: string): FailoverStrategyRequest {
        this['repairStrategy'] = repairStrategy;
        return this;
    }
}