import { PlanCreateParam } from './PlanCreateParam';


export class CreatePlansRequest {
    private 'project_id'?: string;
    public body?: PlanCreateParam;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreatePlansRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: PlanCreateParam): CreatePlansRequest {
        this['body'] = body;
        return this;
    }
}