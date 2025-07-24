

export class ReviewPageParam {
    public deleted?: string;
    public limit?: number;
    private 'mindmap_id'?: string;
    private 'node_id'?: string;
    private 'node_value'?: string;
    public offset?: number;
    public status?: string;
    public type?: string;
    public constructor() { 
    }
    public withDeleted(deleted: string): ReviewPageParam {
        this['deleted'] = deleted;
        return this;
    }
    public withLimit(limit: number): ReviewPageParam {
        this['limit'] = limit;
        return this;
    }
    public withMindmapId(mindmapId: string): ReviewPageParam {
        this['mindmap_id'] = mindmapId;
        return this;
    }
    public set mindmapId(mindmapId: string  | undefined) {
        this['mindmap_id'] = mindmapId;
    }
    public get mindmapId(): string | undefined {
        return this['mindmap_id'];
    }
    public withNodeId(nodeId: string): ReviewPageParam {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeValue(nodeValue: string): ReviewPageParam {
        this['node_value'] = nodeValue;
        return this;
    }
    public set nodeValue(nodeValue: string  | undefined) {
        this['node_value'] = nodeValue;
    }
    public get nodeValue(): string | undefined {
        return this['node_value'];
    }
    public withOffset(offset: number): ReviewPageParam {
        this['offset'] = offset;
        return this;
    }
    public withStatus(status: string): ReviewPageParam {
        this['status'] = status;
        return this;
    }
    public withType(type: string): ReviewPageParam {
        this['type'] = type;
        return this;
    }
}