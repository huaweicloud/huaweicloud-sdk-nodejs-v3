

export class UpdateParametersReqValues {
    private 'bind_table'?: string;
    private 'character_set_server'?: UpdateParametersReqValuesCharacterSetServerEnum | string;
    private 'collation_server'?: UpdateParametersReqValuesCollationServerEnum | string;
    private 'concurrent_execution_level'?: UpdateParametersReqValuesConcurrentExecutionLevelEnum | string;
    private 'connection_idle_timeout'?: string;
    private 'enable_table_recycle'?: UpdateParametersReqValuesEnableTableRecycleEnum | string;
    private 'insert_to_load_data'?: UpdateParametersReqValuesInsertToLoadDataEnum | string;
    private 'live_transaction_timeout_on_shutdown'?: string;
    private 'long_query_time'?: string;
    private 'max_allowed_packet'?: string;
    private 'max_backend_connections'?: string;
    private 'max_connections'?: string;
    private 'min_backend_connections'?: string;
    private 'not_from_pushdown'?: UpdateParametersReqValuesNotFromPushdownEnum | string;
    private 'seconds_behind_master'?: string;
    private 'sql_audit'?: UpdateParametersReqValuesSqlAuditEnum | string;
    private 'sql_execute_timeout'?: string;
    private 'support_ddl_binlog_hint'?: UpdateParametersReqValuesSupportDdlBinlogHintEnum | string;
    private 'transaction_policy'?: UpdateParametersReqValuesTransactionPolicyEnum | string;
    private 'ultimate_optimize'?: UpdateParametersReqValuesUltimateOptimizeEnum | string;
    public constructor() { 
    }
    public withBindTable(bindTable: string): UpdateParametersReqValues {
        this['bind_table'] = bindTable;
        return this;
    }
    public set bindTable(bindTable: string  | undefined) {
        this['bind_table'] = bindTable;
    }
    public get bindTable(): string | undefined {
        return this['bind_table'];
    }
    public withCharacterSetServer(characterSetServer: UpdateParametersReqValuesCharacterSetServerEnum | string): UpdateParametersReqValues {
        this['character_set_server'] = characterSetServer;
        return this;
    }
    public set characterSetServer(characterSetServer: UpdateParametersReqValuesCharacterSetServerEnum | string  | undefined) {
        this['character_set_server'] = characterSetServer;
    }
    public get characterSetServer(): UpdateParametersReqValuesCharacterSetServerEnum | string | undefined {
        return this['character_set_server'];
    }
    public withCollationServer(collationServer: UpdateParametersReqValuesCollationServerEnum | string): UpdateParametersReqValues {
        this['collation_server'] = collationServer;
        return this;
    }
    public set collationServer(collationServer: UpdateParametersReqValuesCollationServerEnum | string  | undefined) {
        this['collation_server'] = collationServer;
    }
    public get collationServer(): UpdateParametersReqValuesCollationServerEnum | string | undefined {
        return this['collation_server'];
    }
    public withConcurrentExecutionLevel(concurrentExecutionLevel: UpdateParametersReqValuesConcurrentExecutionLevelEnum | string): UpdateParametersReqValues {
        this['concurrent_execution_level'] = concurrentExecutionLevel;
        return this;
    }
    public set concurrentExecutionLevel(concurrentExecutionLevel: UpdateParametersReqValuesConcurrentExecutionLevelEnum | string  | undefined) {
        this['concurrent_execution_level'] = concurrentExecutionLevel;
    }
    public get concurrentExecutionLevel(): UpdateParametersReqValuesConcurrentExecutionLevelEnum | string | undefined {
        return this['concurrent_execution_level'];
    }
    public withConnectionIdleTimeout(connectionIdleTimeout: string): UpdateParametersReqValues {
        this['connection_idle_timeout'] = connectionIdleTimeout;
        return this;
    }
    public set connectionIdleTimeout(connectionIdleTimeout: string  | undefined) {
        this['connection_idle_timeout'] = connectionIdleTimeout;
    }
    public get connectionIdleTimeout(): string | undefined {
        return this['connection_idle_timeout'];
    }
    public withEnableTableRecycle(enableTableRecycle: UpdateParametersReqValuesEnableTableRecycleEnum | string): UpdateParametersReqValues {
        this['enable_table_recycle'] = enableTableRecycle;
        return this;
    }
    public set enableTableRecycle(enableTableRecycle: UpdateParametersReqValuesEnableTableRecycleEnum | string  | undefined) {
        this['enable_table_recycle'] = enableTableRecycle;
    }
    public get enableTableRecycle(): UpdateParametersReqValuesEnableTableRecycleEnum | string | undefined {
        return this['enable_table_recycle'];
    }
    public withInsertToLoadData(insertToLoadData: UpdateParametersReqValuesInsertToLoadDataEnum | string): UpdateParametersReqValues {
        this['insert_to_load_data'] = insertToLoadData;
        return this;
    }
    public set insertToLoadData(insertToLoadData: UpdateParametersReqValuesInsertToLoadDataEnum | string  | undefined) {
        this['insert_to_load_data'] = insertToLoadData;
    }
    public get insertToLoadData(): UpdateParametersReqValuesInsertToLoadDataEnum | string | undefined {
        return this['insert_to_load_data'];
    }
    public withLiveTransactionTimeoutOnShutdown(liveTransactionTimeoutOnShutdown: string): UpdateParametersReqValues {
        this['live_transaction_timeout_on_shutdown'] = liveTransactionTimeoutOnShutdown;
        return this;
    }
    public set liveTransactionTimeoutOnShutdown(liveTransactionTimeoutOnShutdown: string  | undefined) {
        this['live_transaction_timeout_on_shutdown'] = liveTransactionTimeoutOnShutdown;
    }
    public get liveTransactionTimeoutOnShutdown(): string | undefined {
        return this['live_transaction_timeout_on_shutdown'];
    }
    public withLongQueryTime(longQueryTime: string): UpdateParametersReqValues {
        this['long_query_time'] = longQueryTime;
        return this;
    }
    public set longQueryTime(longQueryTime: string  | undefined) {
        this['long_query_time'] = longQueryTime;
    }
    public get longQueryTime(): string | undefined {
        return this['long_query_time'];
    }
    public withMaxAllowedPacket(maxAllowedPacket: string): UpdateParametersReqValues {
        this['max_allowed_packet'] = maxAllowedPacket;
        return this;
    }
    public set maxAllowedPacket(maxAllowedPacket: string  | undefined) {
        this['max_allowed_packet'] = maxAllowedPacket;
    }
    public get maxAllowedPacket(): string | undefined {
        return this['max_allowed_packet'];
    }
    public withMaxBackendConnections(maxBackendConnections: string): UpdateParametersReqValues {
        this['max_backend_connections'] = maxBackendConnections;
        return this;
    }
    public set maxBackendConnections(maxBackendConnections: string  | undefined) {
        this['max_backend_connections'] = maxBackendConnections;
    }
    public get maxBackendConnections(): string | undefined {
        return this['max_backend_connections'];
    }
    public withMaxConnections(maxConnections: string): UpdateParametersReqValues {
        this['max_connections'] = maxConnections;
        return this;
    }
    public set maxConnections(maxConnections: string  | undefined) {
        this['max_connections'] = maxConnections;
    }
    public get maxConnections(): string | undefined {
        return this['max_connections'];
    }
    public withMinBackendConnections(minBackendConnections: string): UpdateParametersReqValues {
        this['min_backend_connections'] = minBackendConnections;
        return this;
    }
    public set minBackendConnections(minBackendConnections: string  | undefined) {
        this['min_backend_connections'] = minBackendConnections;
    }
    public get minBackendConnections(): string | undefined {
        return this['min_backend_connections'];
    }
    public withNotFromPushdown(notFromPushdown: UpdateParametersReqValuesNotFromPushdownEnum | string): UpdateParametersReqValues {
        this['not_from_pushdown'] = notFromPushdown;
        return this;
    }
    public set notFromPushdown(notFromPushdown: UpdateParametersReqValuesNotFromPushdownEnum | string  | undefined) {
        this['not_from_pushdown'] = notFromPushdown;
    }
    public get notFromPushdown(): UpdateParametersReqValuesNotFromPushdownEnum | string | undefined {
        return this['not_from_pushdown'];
    }
    public withSecondsBehindMaster(secondsBehindMaster: string): UpdateParametersReqValues {
        this['seconds_behind_master'] = secondsBehindMaster;
        return this;
    }
    public set secondsBehindMaster(secondsBehindMaster: string  | undefined) {
        this['seconds_behind_master'] = secondsBehindMaster;
    }
    public get secondsBehindMaster(): string | undefined {
        return this['seconds_behind_master'];
    }
    public withSqlAudit(sqlAudit: UpdateParametersReqValuesSqlAuditEnum | string): UpdateParametersReqValues {
        this['sql_audit'] = sqlAudit;
        return this;
    }
    public set sqlAudit(sqlAudit: UpdateParametersReqValuesSqlAuditEnum | string  | undefined) {
        this['sql_audit'] = sqlAudit;
    }
    public get sqlAudit(): UpdateParametersReqValuesSqlAuditEnum | string | undefined {
        return this['sql_audit'];
    }
    public withSqlExecuteTimeout(sqlExecuteTimeout: string): UpdateParametersReqValues {
        this['sql_execute_timeout'] = sqlExecuteTimeout;
        return this;
    }
    public set sqlExecuteTimeout(sqlExecuteTimeout: string  | undefined) {
        this['sql_execute_timeout'] = sqlExecuteTimeout;
    }
    public get sqlExecuteTimeout(): string | undefined {
        return this['sql_execute_timeout'];
    }
    public withSupportDdlBinlogHint(supportDdlBinlogHint: UpdateParametersReqValuesSupportDdlBinlogHintEnum | string): UpdateParametersReqValues {
        this['support_ddl_binlog_hint'] = supportDdlBinlogHint;
        return this;
    }
    public set supportDdlBinlogHint(supportDdlBinlogHint: UpdateParametersReqValuesSupportDdlBinlogHintEnum | string  | undefined) {
        this['support_ddl_binlog_hint'] = supportDdlBinlogHint;
    }
    public get supportDdlBinlogHint(): UpdateParametersReqValuesSupportDdlBinlogHintEnum | string | undefined {
        return this['support_ddl_binlog_hint'];
    }
    public withTransactionPolicy(transactionPolicy: UpdateParametersReqValuesTransactionPolicyEnum | string): UpdateParametersReqValues {
        this['transaction_policy'] = transactionPolicy;
        return this;
    }
    public set transactionPolicy(transactionPolicy: UpdateParametersReqValuesTransactionPolicyEnum | string  | undefined) {
        this['transaction_policy'] = transactionPolicy;
    }
    public get transactionPolicy(): UpdateParametersReqValuesTransactionPolicyEnum | string | undefined {
        return this['transaction_policy'];
    }
    public withUltimateOptimize(ultimateOptimize: UpdateParametersReqValuesUltimateOptimizeEnum | string): UpdateParametersReqValues {
        this['ultimate_optimize'] = ultimateOptimize;
        return this;
    }
    public set ultimateOptimize(ultimateOptimize: UpdateParametersReqValuesUltimateOptimizeEnum | string  | undefined) {
        this['ultimate_optimize'] = ultimateOptimize;
    }
    public get ultimateOptimize(): UpdateParametersReqValuesUltimateOptimizeEnum | string | undefined {
        return this['ultimate_optimize'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateParametersReqValuesCharacterSetServerEnum {
    GBK = 'gbk',
    UTF8 = 'utf8',
    UTF8MB4 = 'utf8mb4'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateParametersReqValuesCollationServerEnum {
    UTF8_UNICODE_CI = 'utf8_unicode_ci',
    UTF8_BIN = 'utf8_bin',
    GBK_CHINESE_CI = 'gbk_chinese_ci',
    GBK_BIN = 'gbk_bin',
    UTF8MB4_UNICODE_CI = 'utf8mb4_unicode_ci',
    UTF8MB4_BIN = 'utf8mb4_bin'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateParametersReqValuesConcurrentExecutionLevelEnum {
    RDS_INSTANCE = 'RDS_INSTANCE',
    DATA_NODE = 'DATA_NODE',
    PHY_TABLE = 'PHY_TABLE'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateParametersReqValuesEnableTableRecycleEnum {
    OFF = 'OFF',
    ON = 'ON'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateParametersReqValuesInsertToLoadDataEnum {
    OFF = 'OFF',
    ON = 'ON'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateParametersReqValuesNotFromPushdownEnum {
    OFF = 'OFF',
    ON = 'ON'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateParametersReqValuesSqlAuditEnum {
    OFF = 'OFF',
    ON = 'ON'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateParametersReqValuesSupportDdlBinlogHintEnum {
    OFF = 'OFF',
    ON = 'ON'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateParametersReqValuesTransactionPolicyEnum {
    XA = 'XA',
    FREE = 'FREE',
    NO_DTX = 'NO_DTX'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateParametersReqValuesUltimateOptimizeEnum {
    OFF = 'OFF',
    ON = 'ON'
}
