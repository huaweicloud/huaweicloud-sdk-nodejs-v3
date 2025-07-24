

export class TestPointPageParam {
    public deleted?: string;
    public limit?: number;
    private 'mindmap_id'?: string;
    private 'node_id'?: string;
    public offset?: number;
    public constructor() { 
    }
    public withDeleted(deleted: string): TestPointPageParam {
        this['deleted'] = deleted;
        return this;
    }
    public withLimit(limit: number): TestPointPageParam {
        this['limit'] = limit;
        return this;
    }
    public withMindmapId(mindmapId: string): TestPointPageParam {
        this['mindmap_id'] = mindmapId;
        return this;
    }
    public set mindmapId(mindmapId: string  | undefined) {
        this['mindmap_id'] = mindmapId;
    }
    public get mindmapId(): string | undefined {
        return this['mindmap_id'];
    }
    public withNodeId(nodeId: string): TestPointPageParam {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withOffset(offset: number): TestPointPageParam {
        this['offset'] = offset;
        return this;
    }
}