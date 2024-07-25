

export class ListSecurityDynamicMaskingPoliciesRequest {
    public workspace?: string;
    public limit?: number;
    public offset?: number;
    public name?: string;
    private 'cluster_name'?: string;
    private 'database_name'?: string;
    private 'table_name'?: string;
    private 'order_by'?: ListSecurityDynamicMaskingPoliciesRequestOrderByEnum | string;
    private 'order_by_asc'?: boolean;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListSecurityDynamicMaskingPoliciesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withLimit(limit: number): ListSecurityDynamicMaskingPoliciesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSecurityDynamicMaskingPoliciesRequest {
        this['offset'] = offset;
        return this;
    }
    public withName(name: string): ListSecurityDynamicMaskingPoliciesRequest {
        this['name'] = name;
        return this;
    }
    public withClusterName(clusterName: string): ListSecurityDynamicMaskingPoliciesRequest {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withDatabaseName(databaseName: string): ListSecurityDynamicMaskingPoliciesRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableName(tableName: string): ListSecurityDynamicMaskingPoliciesRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withOrderBy(orderBy: ListSecurityDynamicMaskingPoliciesRequestOrderByEnum | string): ListSecurityDynamicMaskingPoliciesRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListSecurityDynamicMaskingPoliciesRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListSecurityDynamicMaskingPoliciesRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withOrderByAsc(orderByAsc: boolean): ListSecurityDynamicMaskingPoliciesRequest {
        this['order_by_asc'] = orderByAsc;
        return this;
    }
    public set orderByAsc(orderByAsc: boolean  | undefined) {
        this['order_by_asc'] = orderByAsc;
    }
    public get orderByAsc(): boolean | undefined {
        return this['order_by_asc'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSecurityDynamicMaskingPoliciesRequestOrderByEnum {
    UPDATE_TIME = 'UPDATE_TIME'
}
