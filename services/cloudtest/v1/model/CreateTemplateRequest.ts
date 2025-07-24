import { CommRequestSaveTemplateParam } from './CommRequestSaveTemplateParam';


export class CreateTemplateRequest {
    private 'project_id'?: string;
    public body?: CommRequestSaveTemplateParam;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreateTemplateRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CommRequestSaveTemplateParam): CreateTemplateRequest {
        this['body'] = body;
        return this;
    }
}