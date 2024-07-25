import { DynamicMaskingPolicyUpdate } from './DynamicMaskingPolicyUpdate';


export class DynamicMaskingPolicyUpdateDTO {
    public name?: string;
    private 'datasource_type'?: DynamicMaskingPolicyUpdateDTODatasourceTypeEnum | string;
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
    private 'policy_list'?: Array<DynamicMaskingPolicyUpdate>;
    public constructor(name?: string, datasourceType?: string, clusterId?: string, clusterName?: string, databaseName?: string, tableName?: string, connName?: string, connId?: string, policyList?: Array<DynamicMaskingPolicyUpdate>) { 
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
    public withName(name: string): DynamicMaskingPolicyUpdateDTO {
        this['name'] = name;
        return this;
    }
    public withDatasourceType(datasourceType: DynamicMaskingPolicyUpdateDTODatasourceTypeEnum | string): DynamicMaskingPolicyUpdateDTO {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: DynamicMaskingPolicyUpdateDTODatasourceTypeEnum | string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): DynamicMaskingPolicyUpdateDTODatasourceTypeEnum | string | undefined {
        return this['datasource_type'];
    }
    public withClusterId(clusterId: string): DynamicMaskingPolicyUpdateDTO {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): DynamicMaskingPolicyUpdateDTO {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withDatabaseName(databaseName: string): DynamicMaskingPolicyUpdateDTO {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableId(tableId: string): DynamicMaskingPolicyUpdateDTO {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
    public withTableName(tableName: string): DynamicMaskingPolicyUpdateDTO {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withUserGroups(userGroups: string): DynamicMaskingPolicyUpdateDTO {
        this['user_groups'] = userGroups;
        return this;
    }
    public set userGroups(userGroups: string  | undefined) {
        this['user_groups'] = userGroups;
    }
    public get userGroups(): string | undefined {
        return this['user_groups'];
    }
    public withUsers(users: string): DynamicMaskingPolicyUpdateDTO {
        this['users'] = users;
        return this;
    }
    public withConnName(connName: string): DynamicMaskingPolicyUpdateDTO {
        this['conn_name'] = connName;
        return this;
    }
    public set connName(connName: string  | undefined) {
        this['conn_name'] = connName;
    }
    public get connName(): string | undefined {
        return this['conn_name'];
    }
    public withConnId(connId: string): DynamicMaskingPolicyUpdateDTO {
        this['conn_id'] = connId;
        return this;
    }
    public set connId(connId: string  | undefined) {
        this['conn_id'] = connId;
    }
    public get connId(): string | undefined {
        return this['conn_id'];
    }
    public withSchemaName(schemaName: string): DynamicMaskingPolicyUpdateDTO {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withPolicyList(policyList: Array<DynamicMaskingPolicyUpdate>): DynamicMaskingPolicyUpdateDTO {
        this['policy_list'] = policyList;
        return this;
    }
    public set policyList(policyList: Array<DynamicMaskingPolicyUpdate>  | undefined) {
        this['policy_list'] = policyList;
    }
    public get policyList(): Array<DynamicMaskingPolicyUpdate> | undefined {
        return this['policy_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DynamicMaskingPolicyUpdateDTODatasourceTypeEnum {
    HIVE = 'HIVE',
    DWS = 'DWS',
    DLI = 'DLI'
}
