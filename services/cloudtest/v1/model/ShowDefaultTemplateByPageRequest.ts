import { CommRequestGetDefaultTemplateParam } from './CommRequestGetDefaultTemplateParam';


export class ShowDefaultTemplateByPageRequest {
    private 'project_id'?: string;
    public body?: CommRequestGetDefaultTemplateParam;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ShowDefaultTemplateByPageRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CommRequestGetDefaultTemplateParam): ShowDefaultTemplateByPageRequest {
        this['body'] = body;
        return this;
    }
}