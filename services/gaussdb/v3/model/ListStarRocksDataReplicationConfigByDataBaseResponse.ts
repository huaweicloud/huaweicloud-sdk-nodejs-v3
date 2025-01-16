import { DataBaseInfo } from './DataBaseInfo';
import { TableConfigCheckResult } from './TableConfigCheckResult';
import { TableReplConfig } from './TableReplConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStarRocksDataReplicationConfigByDataBaseResponse extends SdkResponse {
    private 'source_instance_id'?: string;
    private 'source_node_id'?: string;
    private 'database_info'?: DataBaseInfo;
    private 'table_infos'?: Array<TableConfigCheckResult>;
    private 'table_repl_config'?: TableReplConfig;
    private 'new_table_repl_config'?: TableReplConfig;
    private 'target_database_name'?: string;
    private 'is_tables_change'?: boolean;
    private 'last_error_of_alter_table'?: string;
    public constructor() { 
        super();
    }
    public withSourceInstanceId(sourceInstanceId: string): ListStarRocksDataReplicationConfigByDataBaseResponse {
        this['source_instance_id'] = sourceInstanceId;
        return this;
    }
    public set sourceInstanceId(sourceInstanceId: string  | undefined) {
        this['source_instance_id'] = sourceInstanceId;
    }
    public get sourceInstanceId(): string | undefined {
        return this['source_instance_id'];
    }
    public withSourceNodeId(sourceNodeId: string): ListStarRocksDataReplicationConfigByDataBaseResponse {
        this['source_node_id'] = sourceNodeId;
        return this;
    }
    public set sourceNodeId(sourceNodeId: string  | undefined) {
        this['source_node_id'] = sourceNodeId;
    }
    public get sourceNodeId(): string | undefined {
        return this['source_node_id'];
    }
    public withDatabaseInfo(databaseInfo: DataBaseInfo): ListStarRocksDataReplicationConfigByDataBaseResponse {
        this['database_info'] = databaseInfo;
        return this;
    }
    public set databaseInfo(databaseInfo: DataBaseInfo  | undefined) {
        this['database_info'] = databaseInfo;
    }
    public get databaseInfo(): DataBaseInfo | undefined {
        return this['database_info'];
    }
    public withTableInfos(tableInfos: Array<TableConfigCheckResult>): ListStarRocksDataReplicationConfigByDataBaseResponse {
        this['table_infos'] = tableInfos;
        return this;
    }
    public set tableInfos(tableInfos: Array<TableConfigCheckResult>  | undefined) {
        this['table_infos'] = tableInfos;
    }
    public get tableInfos(): Array<TableConfigCheckResult> | undefined {
        return this['table_infos'];
    }
    public withTableReplConfig(tableReplConfig: TableReplConfig): ListStarRocksDataReplicationConfigByDataBaseResponse {
        this['table_repl_config'] = tableReplConfig;
        return this;
    }
    public set tableReplConfig(tableReplConfig: TableReplConfig  | undefined) {
        this['table_repl_config'] = tableReplConfig;
    }
    public get tableReplConfig(): TableReplConfig | undefined {
        return this['table_repl_config'];
    }
    public withNewTableReplConfig(newTableReplConfig: TableReplConfig): ListStarRocksDataReplicationConfigByDataBaseResponse {
        this['new_table_repl_config'] = newTableReplConfig;
        return this;
    }
    public set newTableReplConfig(newTableReplConfig: TableReplConfig  | undefined) {
        this['new_table_repl_config'] = newTableReplConfig;
    }
    public get newTableReplConfig(): TableReplConfig | undefined {
        return this['new_table_repl_config'];
    }
    public withTargetDatabaseName(targetDatabaseName: string): ListStarRocksDataReplicationConfigByDataBaseResponse {
        this['target_database_name'] = targetDatabaseName;
        return this;
    }
    public set targetDatabaseName(targetDatabaseName: string  | undefined) {
        this['target_database_name'] = targetDatabaseName;
    }
    public get targetDatabaseName(): string | undefined {
        return this['target_database_name'];
    }
    public withIsTablesChange(isTablesChange: boolean): ListStarRocksDataReplicationConfigByDataBaseResponse {
        this['is_tables_change'] = isTablesChange;
        return this;
    }
    public set isTablesChange(isTablesChange: boolean  | undefined) {
        this['is_tables_change'] = isTablesChange;
    }
    public get isTablesChange(): boolean | undefined {
        return this['is_tables_change'];
    }
    public withLastErrorOfAlterTable(lastErrorOfAlterTable: string): ListStarRocksDataReplicationConfigByDataBaseResponse {
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