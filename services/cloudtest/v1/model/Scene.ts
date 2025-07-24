

export class Scene {
    public app?: string;
    private 'create_time'?: string;
    private 'creator_name'?: string;
    private 'creator_num'?: string;
    private 'delete_time'?: string;
    public deleted?: string;
    public id?: string;
    private 'mindmap_id'?: string;
    public name?: string;
    private 'node_id'?: string;
    public status?: string;
    private 'status_type'?: string;
    private 'tc_counts'?: string;
    private 'test_cases'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withApp(app: string): Scene {
        this['app'] = app;
        return this;
    }
    public withCreateTime(createTime: string): Scene {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreatorName(creatorName: string): Scene {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCreatorNum(creatorNum: string): Scene {
        this['creator_num'] = creatorNum;
        return this;
    }
    public set creatorNum(creatorNum: string  | undefined) {
        this['creator_num'] = creatorNum;
    }
    public get creatorNum(): string | undefined {
        return this['creator_num'];
    }
    public withDeleteTime(deleteTime: string): Scene {
        this['delete_time'] = deleteTime;
        return this;
    }
    public set deleteTime(deleteTime: string  | undefined) {
        this['delete_time'] = deleteTime;
    }
    public get deleteTime(): string | undefined {
        return this['delete_time'];
    }
    public withDeleted(deleted: string): Scene {
        this['deleted'] = deleted;
        return this;
    }
    public withId(id: string): Scene {
        this['id'] = id;
        return this;
    }
    public withMindmapId(mindmapId: string): Scene {
        this['mindmap_id'] = mindmapId;
        return this;
    }
    public set mindmapId(mindmapId: string  | undefined) {
        this['mindmap_id'] = mindmapId;
    }
    public get mindmapId(): string | undefined {
        return this['mindmap_id'];
    }
    public withName(name: string): Scene {
        this['name'] = name;
        return this;
    }
    public withNodeId(nodeId: string): Scene {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withStatus(status: string): Scene {
        this['status'] = status;
        return this;
    }
    public withStatusType(statusType: string): Scene {
        this['status_type'] = statusType;
        return this;
    }
    public set statusType(statusType: string  | undefined) {
        this['status_type'] = statusType;
    }
    public get statusType(): string | undefined {
        return this['status_type'];
    }
    public withTcCounts(tcCounts: string): Scene {
        this['tc_counts'] = tcCounts;
        return this;
    }
    public set tcCounts(tcCounts: string  | undefined) {
        this['tc_counts'] = tcCounts;
    }
    public get tcCounts(): string | undefined {
        return this['tc_counts'];
    }
    public withTestCases(testCases: string): Scene {
        this['test_cases'] = testCases;
        return this;
    }
    public set testCases(testCases: string  | undefined) {
        this['test_cases'] = testCases;
    }
    public get testCases(): string | undefined {
        return this['test_cases'];
    }
    public withUpdateTime(updateTime: string): Scene {
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