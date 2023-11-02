import { ApprovalBatchParam } from './ApprovalBatchParam';


export class BatchOfflineRequest {
    public workspace?: string;
    public body?: ApprovalBatchParam;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): BatchOfflineRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: ApprovalBatchParam): BatchOfflineRequest {
        this['body'] = body;
        return this;
    }
}