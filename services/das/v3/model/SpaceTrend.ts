

export class SpaceTrend {
    private 'node_id'?: string;
    public name?: string;
    public series?: Array<number>;
    public timestamps?: Array<number>;
    public constructor() { 
    }
    public withNodeId(nodeId: string): SpaceTrend {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withName(name: string): SpaceTrend {
        this['name'] = name;
        return this;
    }
    public withSeries(series: Array<number>): SpaceTrend {
        this['series'] = series;
        return this;
    }
    public withTimestamps(timestamps: Array<number>): SpaceTrend {
        this['timestamps'] = timestamps;
        return this;
    }
}