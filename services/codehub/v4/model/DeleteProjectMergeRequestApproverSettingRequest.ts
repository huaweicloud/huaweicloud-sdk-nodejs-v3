

export class DeleteProjectMergeRequestApproverSettingRequest {
    private 'project_id'?: string;
    private 'setting_id'?: number;
    public constructor(projectId?: string, settingId?: number) { 
        this['project_id'] = projectId;
        this['setting_id'] = settingId;
    }
    public withProjectId(projectId: string): DeleteProjectMergeRequestApproverSettingRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withSettingId(settingId: number): DeleteProjectMergeRequestApproverSettingRequest {
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