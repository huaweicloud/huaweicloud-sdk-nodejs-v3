import { ReviewSettingParamDto } from './ReviewSettingParamDto';


export class UpdateProjectReviewSettingsRequest {
    private 'project_id'?: string;
    public body?: ReviewSettingParamDto;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): UpdateProjectReviewSettingsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: ReviewSettingParamDto): UpdateProjectReviewSettingsRequest {
        this['body'] = body;
        return this;
    }
}