

export class DeleteDatasourceConnectionRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'instance_id'?: string;
    private 'connection_id'?: string;
    public constructor(workspace?: string, instanceId?: string, connectionId?: string) { 
        this['workspace'] = workspace;
        this['instance_id'] = instanceId;
        this['connection_id'] = connectionId;
    }
    public withWorkspace(workspace: string): DeleteDatasourceConnectionRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): DeleteDatasourceConnectionRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withInstanceId(instanceId: string): DeleteDatasourceConnectionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withConnectionId(connectionId: string): DeleteDatasourceConnectionRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
}