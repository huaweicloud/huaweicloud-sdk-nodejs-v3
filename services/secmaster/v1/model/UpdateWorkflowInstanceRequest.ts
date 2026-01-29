import { AopInstanceUpdateDataPojo } from './AopInstanceUpdateDataPojo';


export class UpdateWorkflowInstanceRequest {
    private 'Content-Type'?: string;
    private 'workspace_id'?: string;
    private 'instance_id'?: string;
    public body?: AopInstanceUpdateDataPojo;
    public constructor(contentType?: string, workspaceId?: string, instanceId?: string) { 
        this['Content-Type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['instance_id'] = instanceId;
    }
    public withContentType(contentType: string): UpdateWorkflowInstanceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withWorkspaceId(workspaceId: string): UpdateWorkflowInstanceRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withInstanceId(instanceId: string): UpdateWorkflowInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AopInstanceUpdateDataPojo): UpdateWorkflowInstanceRequest {
        this['body'] = body;
        return this;
    }
}