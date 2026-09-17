

export class QueryAnalysisResultBody {
    private 'datastore_type'?: string;
    private 'node_id'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public metrics?: Array<string>;
    public action?: string;
    public constructor(datastoreType?: string, startTime?: number, endTime?: number, action?: string) { 
        this['datastore_type'] = datastoreType;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['action'] = action;
    }
    public withDatastoreType(datastoreType: string): QueryAnalysisResultBody {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withNodeId(nodeId: string): QueryAnalysisResultBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withStartTime(startTime: number): QueryAnalysisResultBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): QueryAnalysisResultBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withMetrics(metrics: Array<string>): QueryAnalysisResultBody {
        this['metrics'] = metrics;
        return this;
    }
    public withAction(action: string): QueryAnalysisResultBody {
        this['action'] = action;
        return this;
    }
}