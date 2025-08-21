

export class DeleteMergeRequestApproverSettingRequest {
    private 'repository_id'?: number;
    private 'setting_id'?: number;
    public constructor(repositoryId?: number, settingId?: number) { 
        this['repository_id'] = repositoryId;
        this['setting_id'] = settingId;
    }
    public withRepositoryId(repositoryId: number): DeleteMergeRequestApproverSettingRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withSettingId(settingId: number): DeleteMergeRequestApproverSettingRequest {
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