

export class ClearGraph2Request {
    private 'graph_id'?: string;
    private 'clear_metadata'?: boolean;
    public constructor(graphId?: string) { 
        this['graph_id'] = graphId;
    }
    public withGraphId(graphId: string): ClearGraph2Request {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string  | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId(): string | undefined {
        return this['graph_id'];
    }
    public withClearMetadata(clearMetadata: boolean): ClearGraph2Request {
        this['clear_metadata'] = clearMetadata;
        return this;
    }
    public set clearMetadata(clearMetadata: boolean  | undefined) {
        this['clear_metadata'] = clearMetadata;
    }
    public get clearMetadata(): boolean | undefined {
        return this['clear_metadata'];
    }
}