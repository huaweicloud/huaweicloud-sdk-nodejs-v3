import { CreatePlanRequestBody } from './CreatePlanRequestBody';


export class CreatePlanRequest {
    private 'project_id'?: string;
    public body?: CreatePlanRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreatePlanRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CreatePlanRequestBody): CreatePlanRequest {
        this['body'] = body;
        return this;
    }
}