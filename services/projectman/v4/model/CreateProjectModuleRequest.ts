import { CreateProjectModuleRequestBody } from './CreateProjectModuleRequestBody';


export class CreateProjectModuleRequest {
    private 'project_id'?: string;
    public body?: CreateProjectModuleRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreateProjectModuleRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CreateProjectModuleRequestBody): CreateProjectModuleRequest {
        this['body'] = body;
        return this;
    }
}