

export class MindmapBackup {
    private 'bak_name'?: string;
    private 'create_time'?: string;
    private 'creator_name'?: string;
    private 'creator_num'?: string;
    public id?: string;
    public memo?: string;
    public mindmap?: string;
    private 'mindmap_id'?: string;
    public type?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withBakName(bakName: string): MindmapBackup {
        this['bak_name'] = bakName;
        return this;
    }
    public set bakName(bakName: string  | undefined) {
        this['bak_name'] = bakName;
    }
    public get bakName(): string | undefined {
        return this['bak_name'];
    }
    public withCreateTime(createTime: string): MindmapBackup {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreatorName(creatorName: string): MindmapBackup {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCreatorNum(creatorNum: string): MindmapBackup {
        this['creator_num'] = creatorNum;
        return this;
    }
    public set creatorNum(creatorNum: string  | undefined) {
        this['creator_num'] = creatorNum;
    }
    public get creatorNum(): string | undefined {
        return this['creator_num'];
    }
    public withId(id: string): MindmapBackup {
        this['id'] = id;
        return this;
    }
    public withMemo(memo: string): MindmapBackup {
        this['memo'] = memo;
        return this;
    }
    public withMindmap(mindmap: string): MindmapBackup {
        this['mindmap'] = mindmap;
        return this;
    }
    public withMindmapId(mindmapId: string): MindmapBackup {
        this['mindmap_id'] = mindmapId;
        return this;
    }
    public set mindmapId(mindmapId: string  | undefined) {
        this['mindmap_id'] = mindmapId;
    }
    public get mindmapId(): string | undefined {
        return this['mindmap_id'];
    }
    public withType(type: string): MindmapBackup {
        this['type'] = type;
        return this;
    }
    public withUpdateTime(updateTime: string): MindmapBackup {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}