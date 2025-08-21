import { CreateMergeRequestApproverSettingDto } from './CreateMergeRequestApproverSettingDto';


export class UpdateGroupMergeRequestApproverSettingRequest {
    private 'group_id'?: number;
    private 'setting_id'?: number;
    public body?: CreateMergeRequestApproverSettingDto;
    public constructor(groupId?: number, settingId?: number) { 
        this['group_id'] = groupId;
        this['setting_id'] = settingId;
    }
    public withGroupId(groupId: number): UpdateGroupMergeRequestApproverSettingRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withSettingId(settingId: number): UpdateGroupMergeRequestApproverSettingRequest {
        this['setting_id'] = settingId;
        return this;
    }
    public set settingId(settingId: number  | undefined) {
        this['setting_id'] = settingId;
    }
    public get settingId(): number | undefined {
        return this['setting_id'];
    }
    public withBody(body: CreateMergeRequestApproverSettingDto): UpdateGroupMergeRequestApproverSettingRequest {
        this['body'] = body;
        return this;
    }
}