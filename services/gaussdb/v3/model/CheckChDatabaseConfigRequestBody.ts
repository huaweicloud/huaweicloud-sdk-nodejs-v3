import { ChDatabaseConfigsInfo } from './ChDatabaseConfigsInfo';
import { ChDatabaseTableReplConfigInfo } from './ChDatabaseTableReplConfigInfo';


export class CheckChDatabaseConfigRequestBody {
    private 'source_instance_id'?: string;
    private 'source_node_id'?: string;
    private 'source_database_name'?: string;
    private 'db_configs'?: Array<ChDatabaseConfigsInfo>;
    private 'table_repl_config'?: ChDatabaseTableReplConfigInfo;
    public constructor(sourceInstanceId?: string, sourceDatabaseName?: string, dbConfigs?: Array<ChDatabaseConfigsInfo>, tableReplConfig?: ChDatabaseTableReplConfigInfo) { 
        this['source_instance_id'] = sourceInstanceId;
        this['source_database_name'] = sourceDatabaseName;
        this['db_configs'] = dbConfigs;
        this['table_repl_config'] = tableReplConfig;
    }
    public withSourceInstanceId(sourceInstanceId: string): CheckChDatabaseConfigRequestBody {
        this['source_instance_id'] = sourceInstanceId;
        return this;
    }
    public set sourceInstanceId(sourceInstanceId: string  | undefined) {
        this['source_instance_id'] = sourceInstanceId;
    }
    public get sourceInstanceId(): string | undefined {
        return this['source_instance_id'];
    }
    public withSourceNodeId(sourceNodeId: string): CheckChDatabaseConfigRequestBody {
        this['source_node_id'] = sourceNodeId;
        return this;
    }
    public set sourceNodeId(sourceNodeId: string  | undefined) {
        this['source_node_id'] = sourceNodeId;
    }
    public get sourceNodeId(): string | undefined {
        return this['source_node_id'];
    }
    public withSourceDatabaseName(sourceDatabaseName: string): CheckChDatabaseConfigRequestBody {
        this['source_database_name'] = sourceDatabaseName;
        return this;
    }
    public set sourceDatabaseName(sourceDatabaseName: string  | undefined) {
        this['source_database_name'] = sourceDatabaseName;
    }
    public get sourceDatabaseName(): string | undefined {
        return this['source_database_name'];
    }
    public withDbConfigs(dbConfigs: Array<ChDatabaseConfigsInfo>): CheckChDatabaseConfigRequestBody {
        this['db_configs'] = dbConfigs;
        return this;
    }
    public set dbConfigs(dbConfigs: Array<ChDatabaseConfigsInfo>  | undefined) {
        this['db_configs'] = dbConfigs;
    }
    public get dbConfigs(): Array<ChDatabaseConfigsInfo> | undefined {
        return this['db_configs'];
    }
    public withTableReplConfig(tableReplConfig: ChDatabaseTableReplConfigInfo): CheckChDatabaseConfigRequestBody {
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