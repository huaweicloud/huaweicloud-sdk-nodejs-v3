import { CreateMergeRequestTemplateDto } from './CreateMergeRequestTemplateDto';


export class CreateProjectMergeRequestTemplateRequest {
    private 'project_id'?: string;
    public body?: CreateMergeRequestTemplateDto;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreateProjectMergeRequestTemplateRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CreateMergeRequestTemplateDto): CreateProjectMergeRequestTemplateRequest {
        this['body'] = body;
        return this;
    }
}