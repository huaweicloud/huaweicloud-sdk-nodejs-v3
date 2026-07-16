

export class TaskTaskResource {
    private 'flavor_id'?: string;
    private 'node_count'?: number;
    private 'pool_id'?: string;
    public constructor(nodeCount?: number) { 
        this['node_count'] = nodeCount;
    }
    public withFlavorId(flavorId: string): TaskTaskResource {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withNodeCount(nodeCount: number): TaskTaskResource {
        this['node_count'] = nodeCount;
        return this;
    }
    public set nodeCount(nodeCount: number  | undefined) {
        this['node_count'] = nodeCount;
    }
    public get nodeCount(): number | undefined {
        return this['node_count'];
    }
    public withPoolId(poolId: string): TaskTaskResource {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
}