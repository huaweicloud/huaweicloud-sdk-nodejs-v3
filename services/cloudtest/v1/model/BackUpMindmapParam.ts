

export class BackUpMindmapParam {
    private 'bak_name'?: string;
    public memo?: string;
    private 'mindmap_id'?: string;
    public constructor() { 
    }
    public withBakName(bakName: string): BackUpMindmapParam {
        this['bak_name'] = bakName;
        return this;
    }
    public set bakName(bakName: string  | undefined) {
        this['bak_name'] = bakName;
    }
    public get bakName(): string | undefined {
        return this['bak_name'];
    }
    public withMemo(memo: string): BackUpMindmapParam {
        this['memo'] = memo;
        return this;
    }
    public withMindmapId(mindmapId: string): BackUpMindmapParam {
        this['mindmap_id'] = mindmapId;
        return this;
    }
    public set mindmapId(mindmapId: string  | undefined) {
        this['mindmap_id'] = mindmapId;
    }
    public get mindmapId(): string | undefined {
        return this['mindmap_id'];
    }
}