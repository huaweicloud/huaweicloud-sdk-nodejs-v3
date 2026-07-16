

export class ResetNodesRequestRollingConfig {
    public strategy?: string;
    public maxUnavailable?: number;
    public constructor(strategy?: string, maxUnavailable?: number) { 
        this['strategy'] = strategy;
        this['maxUnavailable'] = maxUnavailable;
    }
    public withStrategy(strategy: string): ResetNodesRequestRollingConfig {
        this['strategy'] = strategy;
        return this;
    }
    public withMaxUnavailable(maxUnavailable: number): ResetNodesRequestRollingConfig {
        this['maxUnavailable'] = maxUnavailable;
        return this;
    }
}