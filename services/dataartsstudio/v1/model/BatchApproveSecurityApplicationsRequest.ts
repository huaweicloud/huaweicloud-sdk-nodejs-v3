import { BatchApproveRequestBody } from './BatchApproveRequestBody';


export class BatchApproveSecurityApplicationsRequest {
    public workspace?: string;
    public body?: BatchApproveRequestBody;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): BatchApproveSecurityApplicationsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: BatchApproveRequestBody): BatchApproveSecurityApplicationsRequest {
        this['body'] = body;
        return this;
    }
}