import { CreateCustomfieldV1Req } from './CreateCustomfieldV1Req';


export class CreateCustomfieldsRequest {
    private 'project_id'?: string;
    public body?: CreateCustomfieldV1Req;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreateCustomfieldsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CreateCustomfieldV1Req): CreateCustomfieldsRequest {
        this['body'] = body;
        return this;
    }
}