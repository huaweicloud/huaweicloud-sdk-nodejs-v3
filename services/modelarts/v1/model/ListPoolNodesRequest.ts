

export class ListPoolNodesRequest {
    private 'continue'?: string;
    public limit?: number;
    private 'pool_name'?: string;
    public constructor(poolName?: string) { 
        this['pool_name'] = poolName;
    }
    public withContinue(_continue: string): ListPoolNodesRequest {
        this['continue'] = _continue;
        return this;
    }
    public set _continue(_continue: string  | undefined) {
        this['continue'] = _continue;
    }
    public get _continue(): string | undefined {
        return this['continue'];
    }
    public withLimit(limit: number): ListPoolNodesRequest {
        this['limit'] = limit;
        return this;
    }
    public withPoolName(poolName: string): ListPoolNodesRequest {
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