

export class ListDatasourceConnectionsRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'instance_id'?: string;
    public limit?: number;
    public name?: string;
    public offset?: number;
    public constructor(workspace?: string, instanceId?: string) { 
        this['workspace'] = workspace;
        this['instance_id'] = instanceId;
    }
    public withWorkspace(workspace: string): ListDatasourceConnectionsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ListDatasourceConnectionsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withInstanceId(instanceId: string): ListDatasourceConnectionsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLimit(limit: number): ListDatasourceConnectionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListDatasourceConnectionsRequest {
        this['name'] = name;
        return this;
    }
    public withOffset(offset: number): ListDatasourceConnectionsRequest {
        this['offset'] = offset;
        return this;
    }
}