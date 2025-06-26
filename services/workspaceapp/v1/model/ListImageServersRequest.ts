

export class ListImageServersRequest {
    public offset?: number;
    public limit?: number;
    private 'server_name'?: string;
    private 'server_id'?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListImageServersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListImageServersRequest {
        this['limit'] = limit;
        return this;
    }
    public withServerName(serverName: string): ListImageServersRequest {
        this['server_name'] = serverName;
        return this;
    }
    public set serverName(serverName: string  | undefined) {
        this['server_name'] = serverName;
    }
    public get serverName(): string | undefined {
        return this['server_name'];
    }
    public withServerId(serverId: string): ListImageServersRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListImageServersRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}