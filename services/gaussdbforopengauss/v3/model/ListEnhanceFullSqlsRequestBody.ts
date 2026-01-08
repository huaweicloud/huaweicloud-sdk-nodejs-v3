import { CompareConditionOption } from './CompareConditionOption';
import { MultiQueryConditionOption } from './MultiQueryConditionOption';


export class ListEnhanceFullSqlsRequestBody {
    private 'node_id'?: string;
    public limit?: number;
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
    private 'order_by'?: ListEnhanceFullSqlsRequestBodyOrderByEnum | string;
    private 'is_slow_sql'?: boolean;
    public order?: ListEnhanceFullSqlsRequestBodyOrderEnum | string;
    private 'multi_queries'?: Array<MultiQueryConditionOption>;
    private 'compare_conditions'?: Array<CompareConditionOption>;
    public constructor(beginTime?: string, endTime?: string) { 
        this['begin_time'] = beginTime;
        this['end_time'] = endTime;
    }
    public withNodeId(nodeId: string): ListEnhanceFullSqlsRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withLimit(limit: number): ListEnhanceFullSqlsRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withBeginTime(beginTime: string): ListEnhanceFullSqlsRequestBody {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListEnhanceFullSqlsRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withQuery(query: string): ListEnhanceFullSqlsRequestBody {
        this['query'] = query;
        return this;
    }
    public withSqlId(sqlId: string): ListEnhanceFullSqlsRequestBody {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
    public withSqlExecId(sqlExecId: string): ListEnhanceFullSqlsRequestBody {
        this['sql_exec_id'] = sqlExecId;
        return this;
    }
    public set sqlExecId(sqlExecId: string  | undefined) {
        this['sql_exec_id'] = sqlExecId;
    }
    public get sqlExecId(): string | undefined {
        return this['sql_exec_id'];
    }
    public withTransactionId(transactionId: string): ListEnhanceFullSqlsRequestBody {
        this['transaction_id'] = transactionId;
        return this;
    }
    public set transactionId(transactionId: string  | undefined) {
        this['transaction_id'] = transactionId;
    }
    public get transactionId(): string | undefined {
        return this['transaction_id'];
    }
    public withTraceId(traceId: string): ListEnhanceFullSqlsRequestBody {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withDbName(dbName: string): ListEnhanceFullSqlsRequestBody {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withSchemaName(schemaName: string): ListEnhanceFullSqlsRequestBody {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withUsername(username: string): ListEnhanceFullSqlsRequestBody {
        this['username'] = username;
        return this;
    }
    public withClientAddr(clientAddr: string): ListEnhanceFullSqlsRequestBody {
        this['client_addr'] = clientAddr;
        return this;
    }
    public set clientAddr(clientAddr: string  | undefined) {
        this['client_addr'] = clientAddr;
    }
    public get clientAddr(): string | undefined {
        return this['client_addr'];
    }
    public withClientPort(clientPort: string): ListEnhanceFullSqlsRequestBody {
        this['client_port'] = clientPort;
        return this;
    }
    public set clientPort(clientPort: string  | undefined) {
        this['client_port'] = clientPort;
    }
    public get clientPort(): string | undefined {
        return this['client_port'];
    }
    public withOrderBy(orderBy: ListEnhanceFullSqlsRequestBodyOrderByEnum | string): ListEnhanceFullSqlsRequestBody {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListEnhanceFullSqlsRequestBodyOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListEnhanceFullSqlsRequestBodyOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withIsSlowSql(isSlowSql: boolean): ListEnhanceFullSqlsRequestBody {
        this['is_slow_sql'] = isSlowSql;
        return this;
    }
    public set isSlowSql(isSlowSql: boolean  | undefined) {
        this['is_slow_sql'] = isSlowSql;
    }
    public get isSlowSql(): boolean | undefined {
        return this['is_slow_sql'];
    }
    public withOrder(order: ListEnhanceFullSqlsRequestBodyOrderEnum | string): ListEnhanceFullSqlsRequestBody {
        this['order'] = order;
        return this;
    }
    public withMultiQueries(multiQueries: Array<MultiQueryConditionOption>): ListEnhanceFullSqlsRequestBody {
        this['multi_queries'] = multiQueries;
        return this;
    }
    public set multiQueries(multiQueries: Array<MultiQueryConditionOption>  | undefined) {
        this['multi_queries'] = multiQueries;
    }
    public get multiQueries(): Array<MultiQueryConditionOption> | undefined {
        return this['multi_queries'];
    }
    public withCompareConditions(compareConditions: Array<CompareConditionOption>): ListEnhanceFullSqlsRequestBody {
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
export enum ListEnhanceFullSqlsRequestBodyOrderByEnum {
    BEGIN_TIME = 'begin_time'
}
/**
    * @export
    * @enum {string}
    */
export enum ListEnhanceFullSqlsRequestBodyOrderEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
