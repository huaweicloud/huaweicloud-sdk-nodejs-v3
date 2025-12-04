

export class DescribeGroupsRespGroup {
    public state?: string;
    public createdAt?: object;
    private 'group_id'?: string;
    private 'coordinator_id'?: number;
    private 'assignment_strategy'?: string;
    private 'group_desc'?: string;
    public constructor() { 
    }
    public withState(state: string): DescribeGroupsRespGroup {
        this['state'] = state;
        return this;
    }
    public withCreatedAt(createdAt: object): DescribeGroupsRespGroup {
        this['createdAt'] = createdAt;
        return this;
    }
    public withGroupId(groupId: string): DescribeGroupsRespGroup {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withCoordinatorId(coordinatorId: number): DescribeGroupsRespGroup {
        this['coordinator_id'] = coordinatorId;
        return this;
    }
    public set coordinatorId(coordinatorId: number  | undefined) {
        this['coordinator_id'] = coordinatorId;
    }
    public get coordinatorId(): number | undefined {
        return this['coordinator_id'];
    }
    public withAssignmentStrategy(assignmentStrategy: string): DescribeGroupsRespGroup {
        this['assignment_strategy'] = assignmentStrategy;
        return this;
    }
    public set assignmentStrategy(assignmentStrategy: string  | undefined) {
        this['assignment_strategy'] = assignmentStrategy;
    }
    public get assignmentStrategy(): string | undefined {
        return this['assignment_strategy'];
    }
    public withGroupDesc(groupDesc: string): DescribeGroupsRespGroup {
        this['group_desc'] = groupDesc;
        return this;
    }
    public set groupDesc(groupDesc: string  | undefined) {
        this['group_desc'] = groupDesc;
    }
    public get groupDesc(): string | undefined {
        return this['group_desc'];
    }
}