

export class DeployStrategyRollingRelease {
    public batches?: number;
    public constructor(batches?: number) { 
        this['batches'] = batches;
    }
    public withBatches(batches: number): DeployStrategyRollingRelease {
        this['batches'] = batches;
        return this;
    }
}