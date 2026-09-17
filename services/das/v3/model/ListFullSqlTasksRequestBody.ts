

export class ListFullSqlTasksRequestBody {
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'range_left'?: number;
    private 'range_right'?: number;
    private 'create_at_left'?: number;
    private 'create_at_right'?: number;
    public user?: string;
    public keyword?: string;
    private 'db_name'?: string;
    public operation?: string;
    private 'thread_id'?: string;
    private 'trx_id'?: string;
    public status?: string;
    private 'sql_template_id'?: string;
    private 'sort_field'?: string;
    public asc?: boolean;
    private 'page_size'?: number;
    private 'cur_page'?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListFullSqlTasksRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): ListFullSqlTasksRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withRangeLeft(rangeLeft: number): ListFullSqlTasksRequestBody {
        this['range_left'] = rangeLeft;
        return this;
    }
    public set rangeLeft(rangeLeft: number  | undefined) {
        this['range_left'] = rangeLeft;
    }
    public get rangeLeft(): number | undefined {
        return this['range_left'];
    }
    public withRangeRight(rangeRight: number): ListFullSqlTasksRequestBody {
        this['range_right'] = rangeRight;
        return this;
    }
    public set rangeRight(rangeRight: number  | undefined) {
        this['range_right'] = rangeRight;
    }
    public get rangeRight(): number | undefined {
        return this['range_right'];
    }
    public withCreateAtLeft(createAtLeft: number): ListFullSqlTasksRequestBody {
        this['create_at_left'] = createAtLeft;
        return this;
    }
    public set createAtLeft(createAtLeft: number  | undefined) {
        this['create_at_left'] = createAtLeft;
    }
    public get createAtLeft(): number | undefined {
        return this['create_at_left'];
    }
    public withCreateAtRight(createAtRight: number): ListFullSqlTasksRequestBody {
        this['create_at_right'] = createAtRight;
        return this;
    }
    public set createAtRight(createAtRight: number  | undefined) {
        this['create_at_right'] = createAtRight;
    }
    public get createAtRight(): number | undefined {
        return this['create_at_right'];
    }
    public withUser(user: string): ListFullSqlTasksRequestBody {
        this['user'] = user;
        return this;
    }
    public withKeyword(keyword: string): ListFullSqlTasksRequestBody {
        this['keyword'] = keyword;
        return this;
    }
    public withDbName(dbName: string): ListFullSqlTasksRequestBody {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withOperation(operation: string): ListFullSqlTasksRequestBody {
        this['operation'] = operation;
        return this;
    }
    public withThreadId(threadId: string): ListFullSqlTasksRequestBody {
        this['thread_id'] = threadId;
        return this;
    }
    public set threadId(threadId: string  | undefined) {
        this['thread_id'] = threadId;
    }
    public get threadId(): string | undefined {
        return this['thread_id'];
    }
    public withTrxId(trxId: string): ListFullSqlTasksRequestBody {
        this['trx_id'] = trxId;
        return this;
    }
    public set trxId(trxId: string  | undefined) {
        this['trx_id'] = trxId;
    }
    public get trxId(): string | undefined {
        return this['trx_id'];
    }
    public withStatus(status: string): ListFullSqlTasksRequestBody {
        this['status'] = status;
        return this;
    }
    public withSqlTemplateId(sqlTemplateId: string): ListFullSqlTasksRequestBody {
        this['sql_template_id'] = sqlTemplateId;
        return this;
    }
    public set sqlTemplateId(sqlTemplateId: string  | undefined) {
        this['sql_template_id'] = sqlTemplateId;
    }
    public get sqlTemplateId(): string | undefined {
        return this['sql_template_id'];
    }
    public withSortField(sortField: string): ListFullSqlTasksRequestBody {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withAsc(asc: boolean): ListFullSqlTasksRequestBody {
        this['asc'] = asc;
        return this;
    }
    public withPageSize(pageSize: number): ListFullSqlTasksRequestBody {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withCurPage(curPage: number): ListFullSqlTasksRequestBody {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: number  | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage(): number | undefined {
        return this['cur_page'];
    }
}