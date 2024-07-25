import { DynamicMaskingPolicyCreate } from './DynamicMaskingPolicyCreate';


export class DynamicMaskingPolicyCreateDTO {
    public name?: string;
    private 'datasource_type'?: DynamicMaskingPolicyCreateDTODatasourceTypeEnum | string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'database_name'?: string;
    private 'table_id'?: string;
    private 'table_name'?: string;
    private 'user_groups'?: string;
    public users?: string;
    private 'conn_name'?: string;
    private 'conn_id'?: string;
    private 'schema_name'?: string;
    private 'policy_list'?: Array<DynamicMaskingPolicyCreate>;
    public constructor(name?: string, datasourceType?: string, clusterId?: string, clusterName?: string, databaseName?: string, tableName?: string, connName?: string, connId?: string, policyList?: Array<DynamicMaskingPolicyCreate>) { 
        this['name'] = name;
        this['datasource_type'] = datasourceType;
        this['cluster_id'] = clusterId;
        this['cluster_name'] = clusterName;
        this['database_name'] = databaseName;
        this['table_name'] = tableName;
        this['conn_name'] = connName;
        this['conn_id'] = connId;
        this['policy_list'] = policyList;
    }
    public withName(name: string): DynamicMaskingPolicyCreateDTO {
        this['name'] = name;
        return this;
    }
    public withDatasourceType(datasourceType: DynamicMaskingPolicyCreateDTODatasourceTypeEnum | string): DynamicMaskingPolicyCreateDTO {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: DynamicMaskingPolicyCreateDTODatasourceTypeEnum | string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): DynamicMaskingPolicyCreateDTODatasourceTypeEnum | string | undefined {
        return this['datasource_type'];
    }
    public withClusterId(clusterId: string): DynamicMaskingPolicyCreateDTO {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): DynamicMaskingPolicyCreateDTO {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withDatabaseName(databaseName: string): DynamicMaskingPolicyCreateDTO {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableId(tableId: string): DynamicMaskingPolicyCreateDTO {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
    public withTableName(tableName: string): DynamicMaskingPolicyCreateDTO {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withUserGroups(userGroups: string): DynamicMaskingPolicyCreateDTO {
        this['user_groups'] = userGroups;
        return this;
    }
    public set userGroups(userGroups: string  | undefined) {
        this['user_groups'] = userGroups;
    }
    public get userGroups(): string | undefined {
        return this['user_groups'];
    }
    public withUsers(users: string): DynamicMaskingPolicyCreateDTO {
        this['users'] = users;
        return this;
    }
    public withConnName(connName: string): DynamicMaskingPolicyCreateDTO {
        this['conn_name'] = connName;
        return this;
    }
    public set connName(connName: string  | undefined) {
        this['conn_name'] = connName;
    }
    public get connName(): string | undefined {
        return this['conn_name'];
    }
    public withConnId(connId: string): DynamicMaskingPolicyCreateDTO {
        this['conn_id'] = connId;
        return this;
    }
    public set connId(connId: string  | undefined) {
        this['conn_id'] = connId;
    }
    public get connId(): string | undefined {
        return this['conn_id'];
    }
    public withSchemaName(schemaName: string): DynamicMaskingPolicyCreateDTO {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withPolicyList(policyList: Array<DynamicMaskingPolicyCreate>): DynamicMaskingPolicyCreateDTO {
        this['policy_list'] = policyList;
        return this;
    }
    public set policyList(policyList: Array<DynamicMaskingPolicyCreate>  | undefined) {
        this['policy_list'] = policyList;
    }
    public get policyList(): Array<DynamicMaskingPolicyCreate> | undefined {
        return this['policy_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DynamicMaskingPolicyCreateDTODatasourceTypeEnum {
    HIVE = 'HIVE',
    DWS = 'DWS',
    DLI = 'DLI'
}
