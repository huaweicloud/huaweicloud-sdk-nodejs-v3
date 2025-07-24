

export class TestPoint {
    public app?: string;
    private 'create_time'?: string;
    private 'creator_name'?: string;
    private 'creator_num'?: string;
    private 'delete_time'?: string;
    public deleted?: string;
    private 'group_id'?: string;
    public id?: string;
    private 'mindmap_id'?: string;
    public name?: string;
    private 'node_id'?: string;
    private 'requirement_id'?: string;
    private 'requirement_name'?: string;
    private 'service_id'?: string;
    public status?: string;
    private 'status_type'?: string;
    private 'tc_counts'?: string;
    private 'test_cases'?: string;
    private 'update_name'?: string;
    private 'update_num'?: string;
    private 'update_time'?: string;
    public version?: string;
    public constructor() { 
    }
    public withApp(app: string): TestPoint {
        this['app'] = app;
        return this;
    }
    public withCreateTime(createTime: string): TestPoint {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreatorName(creatorName: string): TestPoint {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCreatorNum(creatorNum: string): TestPoint {
        this['creator_num'] = creatorNum;
        return this;
    }
    public set creatorNum(creatorNum: string  | undefined) {
        this['creator_num'] = creatorNum;
    }
    public get creatorNum(): string | undefined {
        return this['creator_num'];
    }
    public withDeleteTime(deleteTime: string): TestPoint {
        this['delete_time'] = deleteTime;
        return this;
    }
    public set deleteTime(deleteTime: string  | undefined) {
        this['delete_time'] = deleteTime;
    }
    public get deleteTime(): string | undefined {
        return this['delete_time'];
    }
    public withDeleted(deleted: string): TestPoint {
        this['deleted'] = deleted;
        return this;
    }
    public withGroupId(groupId: string): TestPoint {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withId(id: string): TestPoint {
        this['id'] = id;
        return this;
    }
    public withMindmapId(mindmapId: string): TestPoint {
        this['mindmap_id'] = mindmapId;
        return this;
    }
    public set mindmapId(mindmapId: string  | undefined) {
        this['mindmap_id'] = mindmapId;
    }
    public get mindmapId(): string | undefined {
        return this['mindmap_id'];
    }
    public withName(name: string): TestPoint {
        this['name'] = name;
        return this;
    }
    public withNodeId(nodeId: string): TestPoint {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withRequirementId(requirementId: string): TestPoint {
        this['requirement_id'] = requirementId;
        return this;
    }
    public set requirementId(requirementId: string  | undefined) {
        this['requirement_id'] = requirementId;
    }
    public get requirementId(): string | undefined {
        return this['requirement_id'];
    }
    public withRequirementName(requirementName: string): TestPoint {
        this['requirement_name'] = requirementName;
        return this;
    }
    public set requirementName(requirementName: string  | undefined) {
        this['requirement_name'] = requirementName;
    }
    public get requirementName(): string | undefined {
        return this['requirement_name'];
    }
    public withServiceId(serviceId: string): TestPoint {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withStatus(status: string): TestPoint {
        this['status'] = status;
        return this;
    }
    public withStatusType(statusType: string): TestPoint {
        this['status_type'] = statusType;
        return this;
    }
    public set statusType(statusType: string  | undefined) {
        this['status_type'] = statusType;
    }
    public get statusType(): string | undefined {
        return this['status_type'];
    }
    public withTcCounts(tcCounts: string): TestPoint {
        this['tc_counts'] = tcCounts;
        return this;
    }
    public set tcCounts(tcCounts: string  | undefined) {
        this['tc_counts'] = tcCounts;
    }
    public get tcCounts(): string | undefined {
        return this['tc_counts'];
    }
    public withTestCases(testCases: string): TestPoint {
        this['test_cases'] = testCases;
        return this;
    }
    public set testCases(testCases: string  | undefined) {
        this['test_cases'] = testCases;
    }
    public get testCases(): string | undefined {
        return this['test_cases'];
    }
    public withUpdateName(updateName: string): TestPoint {
        this['update_name'] = updateName;
        return this;
    }
    public set updateName(updateName: string  | undefined) {
        this['update_name'] = updateName;
    }
    public get updateName(): string | undefined {
        return this['update_name'];
    }
    public withUpdateNum(updateNum: string): TestPoint {
        this['update_num'] = updateNum;
        return this;
    }
    public set updateNum(updateNum: string  | undefined) {
        this['update_num'] = updateNum;
    }
    public get updateNum(): string | undefined {
        return this['update_num'];
    }
    public withUpdateTime(updateTime: string): TestPoint {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withVersion(version: string): TestPoint {
        this['version'] = version;
        return this;
    }
}