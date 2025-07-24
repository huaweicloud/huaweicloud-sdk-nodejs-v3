

export class MindmapBackupPageParam {
    private 'bak_name'?: string;
    public limit?: number;
    public offset?: number;
    private 'mindmap_id'?: string;
    public type?: string;
    public constructor() { 
    }
    public withBakName(bakName: string): MindmapBackupPageParam {
        this['bak_name'] = bakName;
        return this;
    }
    public set bakName(bakName: string  | undefined) {
        this['bak_name'] = bakName;
    }
    public get bakName(): string | undefined {
        return this['bak_name'];
    }
    public withLimit(limit: number): MindmapBackupPageParam {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): MindmapBackupPageParam {
        this['offset'] = offset;
        return this;
    }
    public withMindmapId(mindmapId: string): MindmapBackupPageParam {
        this['mindmap_id'] = mindmapId;
        return this;
    }
    public set mindmapId(mindmapId: string  | undefined) {
        this['mindmap_id'] = mindmapId;
    }
    public get mindmapId(): string | undefined {
        return this['mindmap_id'];
    }
    public withType(type: string): MindmapBackupPageParam {
        this['type'] = type;
        return this;
    }
}