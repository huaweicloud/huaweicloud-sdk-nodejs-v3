import { ChDatabaseConfigResponse } from './ChDatabaseConfigResponse';
import { ChDatabaseTableConfigCheckResult } from './ChDatabaseTableConfigCheckResult';
import { ChDatabaseTableReplConfigInfo } from './ChDatabaseTableReplConfigInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClickHouseDataBaseReplicationConfigResponse extends SdkResponse {
    private 'source_instance_id'?: string;
    private 'source_node_id'?: string;
    private 'database_info'?: ChDatabaseConfigResponse;
    private 'table_infos'?: Array<ChDatabaseTableConfigCheckResult>;
    private 'table_repl_config'?: ChDatabaseTableReplConfigInfo;
    private 'is_tables_change'?: boolean;
    private 'new_table_repl_config'?: ChDatabaseTableReplConfigInfo;
    private 'last_error_of_alter_table'?: string;
    public constructor() { 
        super();
    }
    public withSourceInstanceId(sourceInstanceId: string): ListClickHouseDataBaseReplicationConfigResponse {
        this['source_instance_id'] = sourceInstanceId;
        return this;
    }
    public set sourceInstanceId(sourceInstanceId: string  | undefined) {
        this['source_instance_id'] = sourceInstanceId;
    }
    public get sourceInstanceId(): string | undefined {
        return this['source_instance_id'];
    }
    public withSourceNodeId(sourceNodeId: string): ListClickHouseDataBaseReplicationConfigResponse {
        this['source_node_id'] = sourceNodeId;
        return this;
    }
    public set sourceNodeId(sourceNodeId: string  | undefined) {
        this['source_node_id'] = sourceNodeId;
    }
    public get sourceNodeId(): string | undefined {
        return this['source_node_id'];
    }
    public withDatabaseInfo(databaseInfo: ChDatabaseConfigResponse): ListClickHouseDataBaseReplicationConfigResponse {
        this['database_info'] = databaseInfo;
        return this;
    }
    public set databaseInfo(databaseInfo: ChDatabaseConfigResponse  | undefined) {
        this['database_info'] = databaseInfo;
    }
    public get databaseInfo(): ChDatabaseConfigResponse | undefined {
        return this['database_info'];
    }
    public withTableInfos(tableInfos: Array<ChDatabaseTableConfigCheckResult>): ListClickHouseDataBaseReplicationConfigResponse {
        this['table_infos'] = tableInfos;
        return this;
    }
    public set tableInfos(tableInfos: Array<ChDatabaseTableConfigCheckResult>  | undefined) {
        this['table_infos'] = tableInfos;
    }
    public get tableInfos(): Array<ChDatabaseTableConfigCheckResult> | undefined {
        return this['table_infos'];
    }
    public withTableReplConfig(tableReplConfig: ChDatabaseTableReplConfigInfo): ListClickHouseDataBaseReplicationConfigResponse {
        this['table_repl_config'] = tableReplConfig;
        return this;
    }
    public set tableReplConfig(tableReplConfig: ChDatabaseTableReplConfigInfo  | undefined) {
        this['table_repl_config'] = tableReplConfig;
    }
    public get tableReplConfig(): ChDatabaseTableReplConfigInfo | undefined {
        return this['table_repl_config'];
    }
    public withIsTablesChange(isTablesChange: boolean): ListClickHouseDataBaseReplicationConfigResponse {
        this['is_tables_change'] = isTablesChange;
        return this;
    }
    public set isTablesChange(isTablesChange: boolean  | undefined) {
        this['is_tables_change'] = isTablesChange;
    }
    public get isTablesChange(): boolean | undefined {
        return this['is_tables_change'];
    }
    public withNewTableReplConfig(newTableReplConfig: ChDatabaseTableReplConfigInfo): ListClickHouseDataBaseReplicationConfigResponse {
        this['new_table_repl_config'] = newTableReplConfig;
        return this;
    }
    public set newTableReplConfig(newTableReplConfig: ChDatabaseTableReplConfigInfo  | undefined) {
        this['new_table_repl_config'] = newTableReplConfig;
    }
    public get newTableReplConfig(): ChDatabaseTableReplConfigInfo | undefined {
        return this['new_table_repl_config'];
    }
    public withLastErrorOfAlterTable(lastErrorOfAlterTable: string): ListClickHouseDataBaseReplicationConfigResponse {
        this['last_error_of_alter_table'] = lastErrorOfAlterTable;
        return this;
    }
    public set lastErrorOfAlterTable(lastErrorOfAlterTable: string  | undefined) {
        this['last_error_of_alter_table'] = lastErrorOfAlterTable;
    }
    public get lastErrorOfAlterTable(): string | undefined {
        return this['last_error_of_alter_table'];
    }
}