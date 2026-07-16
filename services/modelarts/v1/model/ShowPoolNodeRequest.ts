

export class ShowPoolNodeRequest {
    private 'pool_name'?: string;
    private 'node_name'?: string;
    public constructor(poolName?: string, nodeName?: string) { 
        this['pool_name'] = poolName;
        this['node_name'] = nodeName;
    }
    public withPoolName(poolName: string): ShowPoolNodeRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
    public withNodeName(nodeName: string): ShowPoolNodeRequest {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
}