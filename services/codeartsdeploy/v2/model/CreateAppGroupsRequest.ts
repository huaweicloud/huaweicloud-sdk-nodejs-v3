import { CreateAppGroupsRequestBody } from './CreateAppGroupsRequestBody';


export class CreateAppGroupsRequest {
    private 'project_id'?: string;
    public body?: CreateAppGroupsRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreateAppGroupsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CreateAppGroupsRequestBody): CreateAppGroupsRequest {
        this['body'] = body;
        return this;
    }
}