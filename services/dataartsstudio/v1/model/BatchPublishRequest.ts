import { ApprovalBatchParam } from './ApprovalBatchParam';


export class BatchPublishRequest {
    public workspace?: string;
    public body?: ApprovalBatchParam;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): BatchPublishRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: ApprovalBatchParam): BatchPublishRequest {
        this['body'] = body;
        return this;
    }
}