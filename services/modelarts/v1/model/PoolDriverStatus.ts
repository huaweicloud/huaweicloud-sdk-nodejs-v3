

export class PoolDriverStatus {
    public version?: string;
    public state?: string;
    public constructor(version?: string, state?: string) { 
        this['version'] = version;
        this['state'] = state;
    }
    public withVersion(version: string): PoolDriverStatus {
        this['version'] = version;
        return this;
    }
    public withState(state: string): PoolDriverStatus {
        this['state'] = state;
        return this;
    }
}