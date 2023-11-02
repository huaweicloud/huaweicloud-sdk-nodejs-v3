import { ApproverParam } from './ApproverParam';


export class CreateApproverRequest {
    public workspace?: string;
    public body?: ApproverParam;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateApproverRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: ApproverParam): CreateApproverRequest {
        this['body'] = body;
        return this;
    }
}