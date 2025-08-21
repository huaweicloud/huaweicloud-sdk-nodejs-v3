

export class DeleteGroupMergeRequestApproverSettingRequest {
    private 'group_id'?: number;
    private 'setting_id'?: number;
    public constructor(groupId?: number, settingId?: number) { 
        this['group_id'] = groupId;
        this['setting_id'] = settingId;
    }
    public withGroupId(groupId: number): DeleteGroupMergeRequestApproverSettingRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withSettingId(settingId: number): DeleteGroupMergeRequestApproverSettingRequest {
        this['setting_id'] = settingId;
        return this;
    }
    public set settingId(settingId: number  | undefined) {
        this['setting_id'] = settingId;
    }
    public get settingId(): number | undefined {
        return this['setting_id'];
    }
}