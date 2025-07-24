import { CreateTaskRequestV2 } from './CreateTaskRequestV2';


export class CreateTaskRequest {
    private 'project_id'?: string;
    public body?: CreateTaskRequestV2;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreateTaskRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CreateTaskRequestV2): CreateTaskRequest {
        this['body'] = body;
        return this;
    }
}