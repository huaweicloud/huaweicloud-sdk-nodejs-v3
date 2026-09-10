

export class DeleteDatasourceConnectionRoutesRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'connection_id'?: string;
    private 'route_name'?: string;
    public constructor(workspace?: string, connectionId?: string, routeName?: string) { 
        this['workspace'] = workspace;
        this['connection_id'] = connectionId;
        this['route_name'] = routeName;
    }
    public withWorkspace(workspace: string): DeleteDatasourceConnectionRoutesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): DeleteDatasourceConnectionRoutesRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withConnectionId(connectionId: string): DeleteDatasourceConnectionRoutesRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withRouteName(routeName: string): DeleteDatasourceConnectionRoutesRequest {
        this['route_name'] = routeName;
        return this;
    }
    public set routeName(routeName: string  | undefined) {
        this['route_name'] = routeName;
    }
    public get routeName(): string | undefined {
        return this['route_name'];
    }
}