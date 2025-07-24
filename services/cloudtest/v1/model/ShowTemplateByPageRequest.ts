import { CommRequestTemplatePageParam } from './CommRequestTemplatePageParam';


export class ShowTemplateByPageRequest {
    private 'project_id'?: string;
    public body?: CommRequestTemplatePageParam;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ShowTemplateByPageRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CommRequestTemplatePageParam): ShowTemplateByPageRequest {
        this['body'] = body;
        return this;
    }
}