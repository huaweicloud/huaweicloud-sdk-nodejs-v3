import { DescribeGroupsRespGroupMembers } from './DescribeGroupsRespGroupMembers';
import { ShowGroupsRespGroupGroupMessageOffsets } from './ShowGroupsRespGroupGroupMessageOffsets';


export class DescribeGroupsRespGroup {
    private 'group_id'?: string;
    public state?: string;
    private 'coordinator_id'?: number;
    public members?: Array<DescribeGroupsRespGroupMembers>;
    private 'group_message_offsets'?: Array<ShowGroupsRespGroupGroupMessageOffsets>;
    private 'assignment_strategy'?: string;
    public constructor() { 
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
    public withState(state: string): DescribeGroupsRespGroup {
        this['state'] = state;
        return this;
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
    public withMembers(members: Array<DescribeGroupsRespGroupMembers>): DescribeGroupsRespGroup {
        this['members'] = members;
        return this;
    }
    public withGroupMessageOffsets(groupMessageOffsets: Array<ShowGroupsRespGroupGroupMessageOffsets>): DescribeGroupsRespGroup {
        this['group_message_offsets'] = groupMessageOffsets;
        return this;
    }
    public set groupMessageOffsets(groupMessageOffsets: Array<ShowGroupsRespGroupGroupMessageOffsets>  | undefined) {
        this['group_message_offsets'] = groupMessageOffsets;
    }
    public get groupMessageOffsets(): Array<ShowGroupsRespGroupGroupMessageOffsets> | undefined {
        return this['group_message_offsets'];
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
}