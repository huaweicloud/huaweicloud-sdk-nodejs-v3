import { CreateGroupRequestBody } from './CreateGroupRequestBody';


export class CreateGroupRequest {
    private 'project_id'?: string;
    public body?: CreateGroupRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreateGroupRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CreateGroupRequestBody): CreateGroupRequest {
        this['body'] = body;
        return this;
    }
}