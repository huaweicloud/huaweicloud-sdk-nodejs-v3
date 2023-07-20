

export class ListGraphBackups2Request {
    private 'graph_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(graphId?: string) { 
        this['graph_id'] = graphId;
    }
    public withGraphId(graphId: string): ListGraphBackups2Request {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string  | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId(): string | undefined {
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