

export class ListFullSqlTasksRequest {
    private 'instance_id'?: string;
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
    public page?: number;
    public limit?: number;
    private 'X-Language'?: ListFullSqlTasksRequestXLanguageEnum | string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListFullSqlTasksRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withRangeLeft(rangeLeft: number): ListFullSqlTasksRequest {
        this['range_left'] = rangeLeft;
        return this;
    }
    public set rangeLeft(rangeLeft: number  | undefined) {
        this['range_left'] = rangeLeft;
    }
    public get rangeLeft(): number | undefined {
        return this['range_left'];
    }
    public withRangeRight(rangeRight: number): ListFullSqlTasksRequest {
        this['range_right'] = rangeRight;
        return this;
    }
    public set rangeRight(rangeRight: number  | undefined) {
        this['range_right'] = rangeRight;
    }
    public get rangeRight(): number | undefined {
        return this['range_right'];
    }
    public withCreateAtLeft(createAtLeft: number): ListFullSqlTasksRequest {
        this['create_at_left'] = createAtLeft;
        return this;
    }
    public set createAtLeft(createAtLeft: number  | undefined) {
        this['create_at_left'] = createAtLeft;
    }
    public get createAtLeft(): number | undefined {
        return this['create_at_left'];
    }
    public withCreateAtRight(createAtRight: number): ListFullSqlTasksRequest {
        this['create_at_right'] = createAtRight;
        return this;
    }
    public set createAtRight(createAtRight: number  | undefined) {
        this['create_at_right'] = createAtRight;
    }
    public get createAtRight(): number | undefined {
        return this['create_at_right'];
    }
    public withUser(user: string): ListFullSqlTasksRequest {
        this['user'] = user;
        return this;
    }
    public withKeyword(keyword: string): ListFullSqlTasksRequest {
        this['keyword'] = keyword;
        return this;
    }
    public withDbName(dbName: string): ListFullSqlTasksRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withOperation(operation: string): ListFullSqlTasksRequest {
        this['operation'] = operation;
        return this;
    }
    public withThreadId(threadId: string): ListFullSqlTasksRequest {
        this['thread_id'] = threadId;
        return this;
    }
    public set threadId(threadId: string  | undefined) {
        this['thread_id'] = threadId;
    }
    public get threadId(): string | undefined {
        return this['thread_id'];
    }
    public withTrxId(trxId: string): ListFullSqlTasksRequest {
        this['trx_id'] = trxId;
        return this;
    }
    public set trxId(trxId: string  | undefined) {
        this['trx_id'] = trxId;
    }
    public get trxId(): string | undefined {
        return this['trx_id'];
    }
    public withStatus(status: string): ListFullSqlTasksRequest {
        this['status'] = status;
        return this;
    }
    public withSqlTemplateId(sqlTemplateId: string): ListFullSqlTasksRequest {
        this['sql_template_id'] = sqlTemplateId;
        return this;
    }
    public set sqlTemplateId(sqlTemplateId: string  | undefined) {
        this['sql_template_id'] = sqlTemplateId;
    }
    public get sqlTemplateId(): string | undefined {
        return this['sql_template_id'];
    }
    public withSortField(sortField: string): ListFullSqlTasksRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withAsc(asc: boolean): ListFullSqlTasksRequest {
        this['asc'] = asc;
        return this;
    }
    public withPage(page: number): ListFullSqlTasksRequest {
        this['page'] = page;
        return this;
    }
    public withLimit(limit: number): ListFullSqlTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withXLanguage(xLanguage: ListFullSqlTasksRequestXLanguageEnum | string): ListFullSqlTasksRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListFullSqlTasksRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListFullSqlTasksRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFullSqlTasksRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
