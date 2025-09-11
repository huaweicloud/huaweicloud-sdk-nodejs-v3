import { CompareConditionOption } from './CompareConditionOption';
import { MultiQueryConditionOption } from './MultiQueryConditionOption';


export class ListEnhanceFullSqlStatisticsRequestBody {
    public limit?: number;
    public offset?: number;
    private 'node_id'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public query?: string;
    private 'sql_id'?: string;
    private 'sql_exec_id'?: string;
    private 'transaction_id'?: string;
    private 'trace_id'?: string;
    private 'db_name'?: string;
    private 'schema_name'?: string;
    public username?: string;
    private 'client_addr'?: string;
    private 'client_port'?: string;
    private 'order_by'?: ListEnhanceFullSqlStatisticsRequestBodyOrderByEnum | string;
    private 'is_slow_sql'?: boolean;
    public order?: ListEnhanceFullSqlStatisticsRequestBodyOrderEnum | string;
    private 'application_name'?: string;
    private 'component_id'?: string;
    private 'multi_queries'?: Array<MultiQueryConditionOption>;
    private 'compare_conditions'?: Array<CompareConditionOption>;
    public constructor(beginTime?: string, endTime?: string) { 
        this['begin_time'] = beginTime;
        this['end_time'] = endTime;
    }
    public withLimit(limit: number): ListEnhanceFullSqlStatisticsRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListEnhanceFullSqlStatisticsRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withNodeId(nodeId: string): ListEnhanceFullSqlStatisticsRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withBeginTime(beginTime: string): ListEnhanceFullSqlStatisticsRequestBody {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListEnhanceFullSqlStatisticsRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withQuery(query: string): ListEnhanceFullSqlStatisticsRequestBody {
        this['query'] = query;
        return this;
    }
    public withSqlId(sqlId: string): ListEnhanceFullSqlStatisticsRequestBody {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
    public withSqlExecId(sqlExecId: string): ListEnhanceFullSqlStatisticsRequestBody {
        this['sql_exec_id'] = sqlExecId;
        return this;
    }
    public set sqlExecId(sqlExecId: string  | undefined) {
        this['sql_exec_id'] = sqlExecId;
    }
    public get sqlExecId(): string | undefined {
        return this['sql_exec_id'];
    }
    public withTransactionId(transactionId: string): ListEnhanceFullSqlStatisticsRequestBody {
        this['transaction_id'] = transactionId;
        return this;
    }
    public set transactionId(transactionId: string  | undefined) {
        this['transaction_id'] = transactionId;
    }
    public get transactionId(): string | undefined {
        return this['transaction_id'];
    }
    public withTraceId(traceId: string): ListEnhanceFullSqlStatisticsRequestBody {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withDbName(dbName: string): ListEnhanceFullSqlStatisticsRequestBody {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withSchemaName(schemaName: string): ListEnhanceFullSqlStatisticsRequestBody {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withUsername(username: string): ListEnhanceFullSqlStatisticsRequestBody {
        this['username'] = username;
        return this;
    }
    public withClientAddr(clientAddr: string): ListEnhanceFullSqlStatisticsRequestBody {
        this['client_addr'] = clientAddr;
        return this;
    }
    public set clientAddr(clientAddr: string  | undefined) {
        this['client_addr'] = clientAddr;
    }
    public get clientAddr(): string | undefined {
        return this['client_addr'];
    }
    public withClientPort(clientPort: string): ListEnhanceFullSqlStatisticsRequestBody {
        this['client_port'] = clientPort;
        return this;
    }
    public set clientPort(clientPort: string  | undefined) {
        this['client_port'] = clientPort;
    }
    public get clientPort(): string | undefined {
        return this['client_port'];
    }
    public withOrderBy(orderBy: ListEnhanceFullSqlStatisticsRequestBodyOrderByEnum | string): ListEnhanceFullSqlStatisticsRequestBody {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListEnhanceFullSqlStatisticsRequestBodyOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListEnhanceFullSqlStatisticsRequestBodyOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withIsSlowSql(isSlowSql: boolean): ListEnhanceFullSqlStatisticsRequestBody {
        this['is_slow_sql'] = isSlowSql;
        return this;
    }
    public set isSlowSql(isSlowSql: boolean  | undefined) {
        this['is_slow_sql'] = isSlowSql;
    }
    public get isSlowSql(): boolean | undefined {
        return this['is_slow_sql'];
    }
    public withOrder(order: ListEnhanceFullSqlStatisticsRequestBodyOrderEnum | string): ListEnhanceFullSqlStatisticsRequestBody {
        this['order'] = order;
        return this;
    }
    public withApplicationName(applicationName: string): ListEnhanceFullSqlStatisticsRequestBody {
        this['application_name'] = applicationName;
        return this;
    }
    public set applicationName(applicationName: string  | undefined) {
        this['application_name'] = applicationName;
    }
    public get applicationName(): string | undefined {
        return this['application_name'];
    }
    public withComponentId(componentId: string): ListEnhanceFullSqlStatisticsRequestBody {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withMultiQueries(multiQueries: Array<MultiQueryConditionOption>): ListEnhanceFullSqlStatisticsRequestBody {
        this['multi_queries'] = multiQueries;
        return this;
    }
    public set multiQueries(multiQueries: Array<MultiQueryConditionOption>  | undefined) {
        this['multi_queries'] = multiQueries;
    }
    public get multiQueries(): Array<MultiQueryConditionOption> | undefined {
        return this['multi_queries'];
    }
    public withCompareConditions(compareConditions: Array<CompareConditionOption>): ListEnhanceFullSqlStatisticsRequestBody {
        this['compare_conditions'] = compareConditions;
        return this;
    }
    public set compareConditions(compareConditions: Array<CompareConditionOption>  | undefined) {
        this['compare_conditions'] = compareConditions;
    }
    public get compareConditions(): Array<CompareConditionOption> | undefined {
        return this['compare_conditions'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEnhanceFullSqlStatisticsRequestBodyOrderByEnum {
    SQL_ID = 'sql_id',
    SQL_COUNT = 'sql_count',
    AVG_DB_TIME = 'avg_db_time',
    AVG_CPU_TIME = 'avg_cpu_time',
    AVG_EXECUTION_TIME = 'avg_execution_time',
    AVG_DATA_IO_TIME = 'avg_data_io_time',
    START_TIME_STAMP = 'start_time_stamp'
}
/**
    * @export
    * @enum {string}
    */
export enum ListEnhanceFullSqlStatisticsRequestBodyOrderEnum {
    DESC = 'DESC',
    ASC = 'ASC'
}
