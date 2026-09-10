import { BatchBindMigrationResourceToWorkspaceRequestBody } from './BatchBindMigrationResourceToWorkspaceRequestBody';


export class BatchBindMigrationResourceToWorkspaceRequest {
    private 'X-Project-Id'?: string;
    private 'instance_id'?: string;
    public body?: BatchBindMigrationResourceToWorkspaceRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXProjectId(xProjectId: string): BatchBindMigrationResourceToWorkspaceRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withInstanceId(instanceId: string): BatchBindMigrationResourceToWorkspaceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BatchBindMigrationResourceToWorkspaceRequestBody): BatchBindMigrationResourceToWorkspaceRequest {
        this['body'] = body;
        return this;
    }
}