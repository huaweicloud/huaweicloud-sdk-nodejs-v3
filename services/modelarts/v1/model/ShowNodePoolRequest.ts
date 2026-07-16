

export class ShowNodePoolRequest {
    private 'pool_name'?: string;
    private 'nodepool_name'?: string;
    private 'continue'?: string;
    public limit?: string;
    public constructor(poolName?: string, nodepoolName?: string) { 
        this['pool_name'] = poolName;
        this['nodepool_name'] = nodepoolName;
    }
    public withPoolName(poolName: string): ShowNodePoolRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
    public withNodepoolName(nodepoolName: string): ShowNodePoolRequest {
        this['nodepool_name'] = nodepoolName;
        return this;
    }
    public set nodepoolName(nodepoolName: string  | undefined) {
        this['nodepool_name'] = nodepoolName;
    }
    public get nodepoolName(): string | undefined {
        return this['nodepool_name'];
    }
    public withContinue(_continue: string): ShowNodePoolRequest {
        this['continue'] = _continue;
        return this;
    }
    public set _continue(_continue: string  | undefined) {
        this['continue'] = _continue;
    }
    public get _continue(): string | undefined {
        return this['continue'];
    }
    public withLimit(limit: string): ShowNodePoolRequest {
        this['limit'] = limit;
        return this;
    }
}