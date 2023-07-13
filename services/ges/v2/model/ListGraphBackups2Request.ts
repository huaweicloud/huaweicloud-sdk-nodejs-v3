

export class ListGraphBackups2Request {
    private 'graph_id': string | undefined;
    public offset?: number;
    public limit?: number;
    public constructor(graphId?: any) { 
        this['graph_id'] = graphId;
    }
    public withGraphId(graphId: string): ListGraphBackups2Request {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId() {
        return this['graph_id'];
    }
    public withOffset(offset: number): ListGraphBackups2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListGraphBackups2Request {
        this['limit'] = limit;
        return this;
    }
}