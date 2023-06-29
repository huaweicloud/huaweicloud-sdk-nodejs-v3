

export class ClearGraph2Request {
    private 'graph_id': string | undefined;
    private 'clear_metadata'?: boolean | undefined;
    public constructor(graphId?: any) { 
        this['graph_id'] = graphId;
    }
    public withGraphId(graphId: string): ClearGraph2Request {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId() {
        return this['graph_id'];
    }
    public withClearMetadata(clearMetadata: boolean): ClearGraph2Request {
        this['clear_metadata'] = clearMetadata;
        return this;
    }
    public set clearMetadata(clearMetadata: boolean | undefined) {
        this['clear_metadata'] = clearMetadata;
    }
    public get clearMetadata() {
        return this['clear_metadata'];
    }
}