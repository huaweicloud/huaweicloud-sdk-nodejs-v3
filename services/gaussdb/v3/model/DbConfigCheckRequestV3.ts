import { DbConfig } from './DbConfig';
import { TableReplConfig } from './TableReplConfig';


export class DbConfigCheckRequestV3 {
    private 'source_instance_id'?: string;
    private 'source_node_id'?: string;
    private 'source_database_name'?: string;
    private 'target_database_name'?: string;
    private 'task_name'?: string;
    private 'db_configs'?: Array<DbConfig>;
    private 'table_repl_config'?: TableReplConfig;
    public constructor() { 
    }
    public withSourceInstanceId(sourceInstanceId: string): DbConfigCheckRequestV3 {
        this['source_instance_id'] = sourceInstanceId;
        return this;
    }
    public set sourceInstanceId(sourceInstanceId: string  | undefined) {
        this['source_instance_id'] = sourceInstanceId;
    }
    public get sourceInstanceId(): string | undefined {
        return this['source_instance_id'];
    }
    public withSourceNodeId(sourceNodeId: string): DbConfigCheckRequestV3 {
        this['source_node_id'] = sourceNodeId;
        return this;
    }
    public set sourceNodeId(sourceNodeId: string  | undefined) {
        this['source_node_id'] = sourceNodeId;
    }
    public get sourceNodeId(): string | undefined {
        return this['source_node_id'];
    }
    public withSourceDatabaseName(sourceDatabaseName: string): DbConfigCheckRequestV3 {
        this['source_database_name'] = sourceDatabaseName;
        return this;
    }
    public set sourceDatabaseName(sourceDatabaseName: string  | undefined) {
        this['source_database_name'] = sourceDatabaseName;
    }
    public get sourceDatabaseName(): string | undefined {
        return this['source_database_name'];
    }
    public withTargetDatabaseName(targetDatabaseName: string): DbConfigCheckRequestV3 {
        this['target_database_name'] = targetDatabaseName;
        return this;
    }
    public set targetDatabaseName(targetDatabaseName: string  | undefined) {
        this['target_database_name'] = targetDatabaseName;
    }
    public get targetDatabaseName(): string | undefined {
        return this['target_database_name'];
    }
    public withTaskName(taskName: string): DbConfigCheckRequestV3 {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withDbConfigs(dbConfigs: Array<DbConfig>): DbConfigCheckRequestV3 {
        this['db_configs'] = dbConfigs;
        return this;
    }
    public set dbConfigs(dbConfigs: Array<DbConfig>  | undefined) {
        this['db_configs'] = dbConfigs;
    }
    public get dbConfigs(): Array<DbConfig> | undefined {
        return this['db_configs'];
    }
    public withTableReplConfig(tableReplConfig: TableReplConfig): DbConfigCheckRequestV3 {
        this['table_repl_config'] = tableReplConfig;
        return this;
    }
    public set tableReplConfig(tableReplConfig: TableReplConfig  | undefined) {
        this['table_repl_config'] = tableReplConfig;
    }
    public get tableReplConfig(): TableReplConfig | undefined {
        return this['table_repl_config'];
    }
}