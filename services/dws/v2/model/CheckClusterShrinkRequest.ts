

export class CheckClusterShrinkRequest {
    private 'cluster_id'?: string;
    private 'check_item'?: string;
    private 'shrink_count'?: number;
    public constructor(clusterId?: string, checkItem?: string, shrinkCount?: number) { 
        this['cluster_id'] = clusterId;
        this['check_item'] = checkItem;
        this['shrink_count'] = shrinkCount;
    }
    public withClusterId(clusterId: string): CheckClusterShrinkRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withCheckItem(checkItem: string): CheckClusterShrinkRequest {
        this['check_item'] = checkItem;
        return this;
    }
    public set checkItem(checkItem: string  | undefined) {
        this['check_item'] = checkItem;
    }
    public get checkItem(): string | undefined {
        return this['check_item'];
    }
    public withShrinkCount(shrinkCount: number): CheckClusterShrinkRequest {
        this['shrink_count'] = shrinkCount;
        return this;
    }
    public set shrinkCount(shrinkCount: number  | undefined) {
        this['shrink_count'] = shrinkCount;
    }
    public get shrinkCount(): number | undefined {
        return this['shrink_count'];
    }
}