import { ApiRequestPara } from './ApiRequestPara';
import { ApiResponsePara } from './ApiResponsePara';
import { DatasourceOrderPara } from './DatasourceOrderPara';


export class DatasourceConfig {
    public type?: DatasourceConfigTypeEnum | string;
    private 'connection_name'?: string;
    private 'connection_id'?: string;
    public database?: string;
    public datatable?: string;
    private 'table_id'?: string;
    public queue?: string;
    private 'access_type'?: DatasourceConfigAccessTypeEnum | string;
    private 'access_mode'?: DatasourceConfigAccessModeEnum | string;
    public pagination?: DatasourceConfigPaginationEnum | string;
    public sql?: string;
    private 'backend_paras'?: Array<ApiRequestPara>;
    private 'response_paras'?: Array<ApiResponsePara>;
    private 'order_paras'?: Array<DatasourceOrderPara>;
    private 'total_size_sql'?: string;
    public constructor() { 
    }
    public withType(type: DatasourceConfigTypeEnum | string): DatasourceConfig {
        this['type'] = type;
        return this;
    }
    public withConnectionName(connectionName: string): DatasourceConfig {
        this['connection_name'] = connectionName;
        return this;
    }
    public set connectionName(connectionName: string  | undefined) {
        this['connection_name'] = connectionName;
    }
    public get connectionName(): string | undefined {
        return this['connection_name'];
    }
    public withConnectionId(connectionId: string): DatasourceConfig {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withDatabase(database: string): DatasourceConfig {
        this['database'] = database;
        return this;
    }
    public withDatatable(datatable: string): DatasourceConfig {
        this['datatable'] = datatable;
        return this;
    }
    public withTableId(tableId: string): DatasourceConfig {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
    public withQueue(queue: string): DatasourceConfig {
        this['queue'] = queue;
        return this;
    }
    public withAccessType(accessType: DatasourceConfigAccessTypeEnum | string): DatasourceConfig {
        this['access_type'] = accessType;
        return this;
    }
    public set accessType(accessType: DatasourceConfigAccessTypeEnum | string  | undefined) {
        this['access_type'] = accessType;
    }
    public get accessType(): DatasourceConfigAccessTypeEnum | string | undefined {
        return this['access_type'];
    }
    public withAccessMode(accessMode: DatasourceConfigAccessModeEnum | string): DatasourceConfig {
        this['access_mode'] = accessMode;
        return this;
    }
    public set accessMode(accessMode: DatasourceConfigAccessModeEnum | string  | undefined) {
        this['access_mode'] = accessMode;
    }
    public get accessMode(): DatasourceConfigAccessModeEnum | string | undefined {
        return this['access_mode'];
    }
    public withPagination(pagination: DatasourceConfigPaginationEnum | string): DatasourceConfig {
        this['pagination'] = pagination;
        return this;
    }
    public withSql(sql: string): DatasourceConfig {
        this['sql'] = sql;
        return this;
    }
    public withBackendParas(backendParas: Array<ApiRequestPara>): DatasourceConfig {
        this['backend_paras'] = backendParas;
        return this;
    }
    public set backendParas(backendParas: Array<ApiRequestPara>  | undefined) {
        this['backend_paras'] = backendParas;
    }
    public get backendParas(): Array<ApiRequestPara> | undefined {
        return this['backend_paras'];
    }
    public withResponseParas(responseParas: Array<ApiResponsePara>): DatasourceConfig {
        this['response_paras'] = responseParas;
        return this;
    }
    public set responseParas(responseParas: Array<ApiResponsePara>  | undefined) {
        this['response_paras'] = responseParas;
    }
    public get responseParas(): Array<ApiResponsePara> | undefined {
        return this['response_paras'];
    }
    public withOrderParas(orderParas: Array<DatasourceOrderPara>): DatasourceConfig {
        this['order_paras'] = orderParas;
        return this;
    }
    public set orderParas(orderParas: Array<DatasourceOrderPara>  | undefined) {
        this['order_paras'] = orderParas;
    }
    public get orderParas(): Array<DatasourceOrderPara> | undefined {
        return this['order_paras'];
    }
    public withTotalSizeSql(totalSizeSql: string): DatasourceConfig {
        this['total_size_sql'] = totalSizeSql;
        return this;
    }
    public set totalSizeSql(totalSizeSql: string  | undefined) {
        this['total_size_sql'] = totalSizeSql;
    }
    public get totalSizeSql(): string | undefined {
        return this['total_size_sql'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DatasourceConfigTypeEnum {
    MYSQL = 'MYSQL',
    DLI = 'DLI',
    DWS = 'DWS',
    HIVE = 'HIVE',
    HBASE = 'HBASE'
}
/**
    * @export
    * @enum {string}
    */
export enum DatasourceConfigAccessTypeEnum {
    SCRIPT = 'SCRIPT',
    CONFIGURAITON = 'CONFIGURAITON'
}
/**
    * @export
    * @enum {string}
    */
export enum DatasourceConfigAccessModeEnum {
    SQL = 'SQL',
    ROW_KEY = 'ROW_KEY',
    PREFIX_FILTER = 'PREFIX_FILTER'
}
/**
    * @export
    * @enum {string}
    */
export enum DatasourceConfigPaginationEnum {
    DEFAULT = 'DEFAULT',
    CUSTOM = 'CUSTOM'
}
