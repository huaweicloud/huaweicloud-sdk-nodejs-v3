import { BatchApproveRequestBody } from './BatchApproveRequestBody';


export class BatchRejectSecurityApplicationsRequest {
    public workspace?: string;
    public body?: BatchApproveRequestBody;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): BatchRejectSecurityApplicationsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: BatchApproveRequestBody): BatchRejectSecurityApplicationsRequest {
        this['body'] = body;
        return this;
    }
}