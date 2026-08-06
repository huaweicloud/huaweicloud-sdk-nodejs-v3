

export class ListTaskTableReferenceDetailRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    private 'table_name'?: string;
    private 'db_type'?: string;
    private 'data_base_name'?: string;
    private 'cluster_name'?: string;
    private 'io_type'?: ListTaskTableReferenceDetailRequestIoTypeEnum | number;
    public offset?: number;
    public limit?: number;
    private 'workspace_name'?: string;
    public owner?: string;
    private 'execute_user'?: string;
    public constructor(workspace?: string, tableName?: string, dbType?: string) { 
        this['workspace'] = workspace;
        this['table_name'] = tableName;
        this['db_type'] = dbType;
    }
    public withWorkspace(workspace: string): ListTaskTableReferenceDetailRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ListTaskTableReferenceDetailRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ListTaskTableReferenceDetailRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withTableName(tableName: string): ListTaskTableReferenceDetailRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withDbType(dbType: string): ListTaskTableReferenceDetailRequest {
        this['db_type'] = dbType;
        return this;
    }
    public set dbType(dbType: string  | undefined) {
        this['db_type'] = dbType;
    }
    public get dbType(): string | undefined {
        return this['db_type'];
    }
    public withDataBaseName(dataBaseName: string): ListTaskTableReferenceDetailRequest {
        this['data_base_name'] = dataBaseName;
        return this;
    }
    public set dataBaseName(dataBaseName: string  | undefined) {
        this['data_base_name'] = dataBaseName;
    }
    public get dataBaseName(): string | undefined {
        return this['data_base_name'];
    }
    public withClusterName(clusterName: string): ListTaskTableReferenceDetailRequest {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withIoType(ioType: ListTaskTableReferenceDetailRequestIoTypeEnum | number): ListTaskTableReferenceDetailRequest {
        this['io_type'] = ioType;
        return this;
    }
    public set ioType(ioType: ListTaskTableReferenceDetailRequestIoTypeEnum | number  | undefined) {
        this['io_type'] = ioType;
    }
    public get ioType(): ListTaskTableReferenceDetailRequestIoTypeEnum | number | undefined {
        return this['io_type'];
    }
    public withOffset(offset: number): ListTaskTableReferenceDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTaskTableReferenceDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withWorkspaceName(workspaceName: string): ListTaskTableReferenceDetailRequest {
        this['workspace_name'] = workspaceName;
        return this;
    }
    public set workspaceName(workspaceName: string  | undefined) {
        this['workspace_name'] = workspaceName;
    }
    public get workspaceName(): string | undefined {
        return this['workspace_name'];
    }
    public withOwner(owner: string): ListTaskTableReferenceDetailRequest {
        this['owner'] = owner;
        return this;
    }
    public withExecuteUser(executeUser: string): ListTaskTableReferenceDetailRequest {
        this['execute_user'] = executeUser;
        return this;
    }
    public set executeUser(executeUser: string  | undefined) {
        this['execute_user'] = executeUser;
    }
    public get executeUser(): string | undefined {
        return this['execute_user'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTaskTableReferenceDetailRequestIoTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
