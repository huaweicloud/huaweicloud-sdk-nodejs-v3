

export class LogicalClusterVolume {
    private 'logical_cluster_name'?: string;
    public usage?: string;
    public total?: string;
    public percent?: string;
    public constructor() { 
    }
    public withLogicalClusterName(logicalClusterName: string): LogicalClusterVolume {
        this['logical_cluster_name'] = logicalClusterName;
        return this;
    }
    public set logicalClusterName(logicalClusterName: string  | undefined) {
        this['logical_cluster_name'] = logicalClusterName;
    }
    public get logicalClusterName(): string | undefined {
        return this['logical_cluster_name'];
    }
    public withUsage(usage: string): LogicalClusterVolume {
        this['usage'] = usage;
        return this;
    }
    public withTotal(total: string): LogicalClusterVolume {
        this['total'] = total;
        return this;
    }
    public withPercent(percent: string): LogicalClusterVolume {
        this['percent'] = percent;
        return this;
    }
}