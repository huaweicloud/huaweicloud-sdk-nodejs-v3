import { CreateMergeRequestApproverSettingDto } from './CreateMergeRequestApproverSettingDto';


export class UpdateProjectMergeRequestApproverSettingRequest {
    private 'project_id'?: string;
    private 'setting_id'?: number;
    public body?: CreateMergeRequestApproverSettingDto;
    public constructor(projectId?: string, settingId?: number) { 
        this['project_id'] = projectId;
        this['setting_id'] = settingId;
    }
    public withProjectId(projectId: string): UpdateProjectMergeRequestApproverSettingRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withSettingId(settingId: number): UpdateProjectMergeRequestApproverSettingRequest {
        this['setting_id'] = settingId;
        return this;
    }
    public set settingId(settingId: number  | undefined) {
        this['setting_id'] = settingId;
    }
    public get settingId(): number | undefined {
        return this['setting_id'];
    }
    public withBody(body: CreateMergeRequestApproverSettingDto): UpdateProjectMergeRequestApproverSettingRequest {
        this['body'] = body;
        return this;
    }
}