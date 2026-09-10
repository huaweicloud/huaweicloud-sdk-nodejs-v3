import { BatchDeleteWorkspacesRequestBody } from './BatchDeleteWorkspacesRequestBody';


export class BatchDeleteWorkspacesRequest {
    private 'instance_id'?: string;
    public body?: BatchDeleteWorkspacesRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): BatchDeleteWorkspacesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BatchDeleteWorkspacesRequestBody): BatchDeleteWorkspacesRequest {
        this['body'] = body;
        return this;
    }
}