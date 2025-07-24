

export class MindmapRecyclePageParam {
    private 'creator_num'?: string;
    public limit?: number;
    public offset?: number;
    private 'project_id'?: string;
    public text?: string;
    public constructor() { 
    }
    public withCreatorNum(creatorNum: string): MindmapRecyclePageParam {
        this['creator_num'] = creatorNum;
        return this;
    }
    public set creatorNum(creatorNum: string  | undefined) {
        this['creator_num'] = creatorNum;
    }
    public get creatorNum(): string | undefined {
        return this['creator_num'];
    }
    public withLimit(limit: number): MindmapRecyclePageParam {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): MindmapRecyclePageParam {
        this['offset'] = offset;
        return this;
    }
    public withProjectId(projectId: string): MindmapRecyclePageParam {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withText(text: string): MindmapRecyclePageParam {
        this['text'] = text;
        return this;
    }
}