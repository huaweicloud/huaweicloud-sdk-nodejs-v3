import { CreateBasicAwReq } from './CreateBasicAwReq';


export class CreateUserDefinedUrlKeyWordRequest {
    private 'project_id'?: string;
    public body?: CreateBasicAwReq;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreateUserDefinedUrlKeyWordRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CreateBasicAwReq): CreateUserDefinedUrlKeyWordRequest {
        this['body'] = body;
        return this;
    }
}