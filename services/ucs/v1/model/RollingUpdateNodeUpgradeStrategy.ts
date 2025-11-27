

export class RollingUpdateNodeUpgradeStrategy {
    public maxUnavailable?: object;
    public maxSurge?: object;
    public deletePolicy?: string;
    public constructor() { 
    }
    public withMaxUnavailable(maxUnavailable: object): RollingUpdateNodeUpgradeStrategy {
        this['maxUnavailable'] = maxUnavailable;
        return this;
    }
    public withMaxSurge(maxSurge: object): RollingUpdateNodeUpgradeStrategy {
        this['maxSurge'] = maxSurge;
        return this;
    }
    public withDeletePolicy(deletePolicy: string): RollingUpdateNodeUpgradeStrategy {
        this['deletePolicy'] = deletePolicy;
        return this;
    }
}