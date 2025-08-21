import { CreateMergeRequestApproverSettingDto } from './CreateMergeRequestApproverSettingDto';


export class CreateGroupMergeRequestApproverSettingRequest {
    private 'group_id'?: number;
    public body?: CreateMergeRequestApproverSettingDto;
    public constructor(groupId?: number) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: number): CreateGroupMergeRequestApproverSettingRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withBody(body: CreateMergeRequestApproverSettingDto): CreateGroupMergeRequestApproverSettingRequest {
        this['body'] = body;
        return this;
    }
}