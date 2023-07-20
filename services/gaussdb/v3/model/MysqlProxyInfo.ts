

export class MysqlProxyInfo {
    private 'pool_id'?: string;
    public name?: string;
    public address?: string;
    public constructor() { 
    }
    public withPoolId(poolId: string): MysqlProxyInfo {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withName(name: string): MysqlProxyInfo {
        this['name'] = name;
        return this;
    }
    public withAddress(address: string): MysqlProxyInfo {
        this['address'] = address;
        return this;
    }
}