import { ChDatabaseConfigsInfo } from './ChDatabaseConfigsInfo';
import { ChDatabaseTableReplConfigInfo } from './ChDatabaseTableReplConfigInfo';
import { ChDatabaseTablesConfigsInfo } from './ChDatabaseTablesConfigsInfo';


export class CheckChDatabaseTableConfigRequestBody {
    private 'source_instance_id'?: string;
    private 'source_node_id'?: string;
    private 'source_database_name'?: string;
    private 'db_configs'?: Array<ChDatabaseConfigsInfo>;
    private 'tables_configs'?: Array<ChDatabaseTablesConfigsInfo>;
    private 'table_repl_config'?: ChDatabaseTableReplConfigInfo;
    public constructor(sourceInstanceId?: string, sourceDatabaseName?: string, dbConfigs?: Array<ChDatabaseConfigsInfo>, tablesConfigs?: Array<ChDatabaseTablesConfigsInfo>, tableReplConfig?: ChDatabaseTableReplConfigInfo) { 
        this['source_instance_id'] = sourceInstanceId;
        this['source_database_name'] = sourceDatabaseName;
        this['db_configs'] = dbConfigs;
        this['tables_configs'] = tablesConfigs;
        this['table_repl_config'] = tableReplConfig;
    }
    public withSourceInstanceId(sourceInstanceId: string): CheckChDatabaseTableConfigRequestBody {
        this['source_instance_id'] = sourceInstanceId;
        return this;
    }
    public set sourceInstanceId(sourceInstanceId: string  | undefined) {
        this['source_instance_id'] = sourceInstanceId;
    }
    public get sourceInstanceId(): string | undefined {
        return this['source_instance_id'];
    }
    public withSourceNodeId(sourceNodeId: string): CheckChDatabaseTableConfigRequestBody {
        this['source_node_id'] = sourceNodeId;
        return this;
    }
    public set sourceNodeId(sourceNodeId: string  | undefined) {
        this['source_node_id'] = sourceNodeId;
    }
    public get sourceNodeId(): string | undefined {
        return this['source_node_id'];
    }
    public withSourceDatabaseName(sourceDatabaseName: string): CheckChDatabaseTableConfigRequestBody {
        this['source_database_name'] = sourceDatabaseName;
        return this;
    }
    public set sourceDatabaseName(sourceDatabaseName: string  | undefined) {
        this['source_database_name'] = sourceDatabaseName;
    }
    public get sourceDatabaseName(): string | undefined {
        return this['source_database_name'];
    }
    public withDbConfigs(dbConfigs: Array<ChDatabaseConfigsInfo>): CheckChDatabaseTableConfigRequestBody {
        this['db_configs'] = dbConfigs;
        return this;
    }
    public set dbConfigs(dbConfigs: Array<ChDatabaseConfigsInfo>  | undefined) {
        this['db_configs'] = dbConfigs;
    }
    public get dbConfigs(): Array<ChDatabaseConfigsInfo> | undefined {
        return this['db_configs'];
    }
    public withTablesConfigs(tablesConfigs: Array<ChDatabaseTablesConfigsInfo>): CheckChDatabaseTableConfigRequestBody {
        this['tables_configs'] = tablesConfigs;
        return this;
    }
    public set tablesConfigs(tablesConfigs: Array<ChDatabaseTablesConfigsInfo>  | undefined) {
        this['tables_configs'] = tablesConfigs;
    }
    public get tablesConfigs(): Array<ChDatabaseTablesConfigsInfo> | undefined {
        return this['tables_configs'];
    }
    public withTableReplConfig(tableReplConfig: ChDatabaseTableReplConfigInfo): CheckChDatabaseTableConfigRequestBody {
        this['table_repl_config'] = tableReplConfig;
        return this;
    }
    public set tableReplConfig(tableReplConfig: ChDatabaseTableReplConfigInfo  | undefined) {
        this['table_repl_config'] = tableReplConfig;
    }
    public get tableReplConfig(): ChDatabaseTableReplConfigInfo | undefined {
        return this['table_repl_config'];
    }
}