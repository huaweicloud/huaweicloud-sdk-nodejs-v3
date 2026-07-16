

export class ListPoolPluginsRequest {
    private 'pool_name'?: string;
    public constructor(poolName?: string) { 
        this['pool_name'] = poolName;
    }
    public withPoolName(poolName: string): ListPoolPluginsRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
}