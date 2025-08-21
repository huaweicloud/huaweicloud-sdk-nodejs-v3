import { CreateMergeRequestApproverSettingDto } from './CreateMergeRequestApproverSettingDto';


export class CreateProjectMergeRequestApproverSettingRequest {
    private 'project_id'?: string;
    public body?: CreateMergeRequestApproverSettingDto;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreateProjectMergeRequestApproverSettingRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CreateMergeRequestApproverSettingDto): CreateProjectMergeRequestApproverSettingRequest {
        this['body'] = body;
        return this;
    }
}