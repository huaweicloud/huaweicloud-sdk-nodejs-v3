import { ExecutionTimeDetailsInfo } from './ExecutionTimeDetailsInfo';


export class NodeExecutionInfoResult {
    private 'component_id'?: string;
    private 'node_id'?: string;
    private 'transaction_id'?: string;
    private 'sql_id'?: string;
    private 'sql_exec_id'?: string;
    private 'db_name'?: string;
    private 'schema_name'?: string;
    private 'start_time'?: string;
    private 'finish_time'?: string;
    private 'all_time'?: number;
    private 'user_name'?: string;
    private 'client_addr'?: string;
    private 'client_port'?: number;
    private 'trace_id'?: string;
    private 'application_name'?: string;
    private 'session_id'?: string;
    private 'is_slow_sql'?: boolean;
    private 'execution_time_details'?: ExecutionTimeDetailsInfo;
    public constructor(componentId?: string, nodeId?: string, transactionId?: string, sqlId?: string, sqlExecId?: string, dbName?: string, schemaName?: string, startTime?: string, finishTime?: string, allTime?: number, userName?: string, clientAddr?: string, clientPort?: number, traceId?: string, applicationName?: string, sessionId?: string, executionTimeDetails?: ExecutionTimeDetailsInfo) { 
        this['component_id'] = componentId;
        this['node_id'] = nodeId;
        this['transaction_id'] = transactionId;
        this['sql_id'] = sqlId;
        this['sql_exec_id'] = sqlExecId;
        this['db_name'] = dbName;
        this['schema_name'] = schemaName;
        this['start_time'] = startTime;
        this['finish_time'] = finishTime;
        this['all_time'] = allTime;
        this['user_name'] = userName;
        this['client_addr'] = clientAddr;
        this['client_port'] = clientPort;
        this['trace_id'] = traceId;
        this['application_name'] = applicationName;
        this['session_id'] = sessionId;
        this['execution_time_details'] = executionTimeDetails;
    }
    public withComponentId(componentId: string): NodeExecutionInfoResult {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withNodeId(nodeId: string): NodeExecutionInfoResult {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withTransactionId(transactionId: string): NodeExecutionInfoResult {
        this['transaction_id'] = transactionId;
        return this;
    }
    public set transactionId(transactionId: string  | undefined) {
        this['transaction_id'] = transactionId;
    }
    public get transactionId(): string | undefined {
        return this['transaction_id'];
    }
    public withSqlId(sqlId: string): NodeExecutionInfoResult {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
    public withSqlExecId(sqlExecId: string): NodeExecutionInfoResult {
        this['sql_exec_id'] = sqlExecId;
        return this;
    }
    public set sqlExecId(sqlExecId: string  | undefined) {
        this['sql_exec_id'] = sqlExecId;
    }
    public get sqlExecId(): string | undefined {
        return this['sql_exec_id'];
    }
    public withDbName(dbName: string): NodeExecutionInfoResult {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withSchemaName(schemaName: string): NodeExecutionInfoResult {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withStartTime(startTime: string): NodeExecutionInfoResult {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withFinishTime(finishTime: string): NodeExecutionInfoResult {
        this['finish_time'] = finishTime;
        return this;
    }
    public set finishTime(finishTime: string  | undefined) {
        this['finish_time'] = finishTime;
    }
    public get finishTime(): string | undefined {
        return this['finish_time'];
    }
    public withAllTime(allTime: number): NodeExecutionInfoResult {
        this['all_time'] = allTime;
        return this;
    }
    public set allTime(allTime: number  | undefined) {
        this['all_time'] = allTime;
    }
    public get allTime(): number | undefined {
        return this['all_time'];
    }
    public withUserName(userName: string): NodeExecutionInfoResult {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withClientAddr(clientAddr: string): NodeExecutionInfoResult {
        this['client_addr'] = clientAddr;
        return this;
    }
    public set clientAddr(clientAddr: string  | undefined) {
        this['client_addr'] = clientAddr;
    }
    public get clientAddr(): string | undefined {
        return this['client_addr'];
    }
    public withClientPort(clientPort: number): NodeExecutionInfoResult {
        this['client_port'] = clientPort;
        return this;
    }
    public set clientPort(clientPort: number  | undefined) {
        this['client_port'] = clientPort;
    }
    public get clientPort(): number | undefined {
        return this['client_port'];
    }
    public withTraceId(traceId: string): NodeExecutionInfoResult {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withApplicationName(applicationName: string): NodeExecutionInfoResult {
        this['application_name'] = applicationName;
        return this;
    }
    public set applicationName(applicationName: string  | undefined) {
        this['application_name'] = applicationName;
    }
    public get applicationName(): string | undefined {
        return this['application_name'];
    }
    public withSessionId(sessionId: string): NodeExecutionInfoResult {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: string  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): string | undefined {
        return this['session_id'];
    }
    public withIsSlowSql(isSlowSql: boolean): NodeExecutionInfoResult {
        this['is_slow_sql'] = isSlowSql;
        return this;
    }
    public set isSlowSql(isSlowSql: boolean  | undefined) {
        this['is_slow_sql'] = isSlowSql;
    }
    public get isSlowSql(): boolean | undefined {
        return this['is_slow_sql'];
    }
    public withExecutionTimeDetails(executionTimeDetails: ExecutionTimeDetailsInfo): NodeExecutionInfoResult {
        this['execution_time_details'] = executionTimeDetails;
        return this;
    }
    public set executionTimeDetails(executionTimeDetails: ExecutionTimeDetailsInfo  | undefined) {
        this['execution_time_details'] = executionTimeDetails;
    }
    public get executionTimeDetails(): ExecutionTimeDetailsInfo | undefined {
        return this['execution_time_details'];
    }
}