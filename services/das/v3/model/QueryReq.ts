

export class QueryReq {
    private 'instance_id'?: string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'node_id'?: string;
    public keyword?: string;
    private 'user_list'?: string;
    private 'db_list'?: string;
    private 'operation_list'?: string;
    private 'thread_id_list'?: string;
    private 'trx_id_list'?: string;
    private 'status_list'?: string;
    private 'sql_template_ids'?: string;
    public constructor(instanceId?: string, startAt?: number, endAt?: number) { 
        this['instance_id'] = instanceId;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
    }
    public withInstanceId(instanceId: string): QueryReq {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStartAt(startAt: number): QueryReq {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): QueryReq {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withNodeId(nodeId: string): QueryReq {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withKeyword(keyword: string): QueryReq {
        this['keyword'] = keyword;
        return this;
    }
    public withUserList(userList: string): QueryReq {
        this['user_list'] = userList;
        return this;
    }
    public set userList(userList: string  | undefined) {
        this['user_list'] = userList;
    }
    public get userList(): string | undefined {
        return this['user_list'];
    }
    public withDbList(dbList: string): QueryReq {
        this['db_list'] = dbList;
        return this;
    }
    public set dbList(dbList: string  | undefined) {
        this['db_list'] = dbList;
    }
    public get dbList(): string | undefined {
        return this['db_list'];
    }
    public withOperationList(operationList: string): QueryReq {
        this['operation_list'] = operationList;
        return this;
    }
    public set operationList(operationList: string  | undefined) {
        this['operation_list'] = operationList;
    }
    public get operationList(): string | undefined {
        return this['operation_list'];
    }
    public withThreadIdList(threadIdList: string): QueryReq {
        this['thread_id_list'] = threadIdList;
        return this;
    }
    public set threadIdList(threadIdList: string  | undefined) {
        this['thread_id_list'] = threadIdList;
    }
    public get threadIdList(): string | undefined {
        return this['thread_id_list'];
    }
    public withTrxIdList(trxIdList: string): QueryReq {
        this['trx_id_list'] = trxIdList;
        return this;
    }
    public set trxIdList(trxIdList: string  | undefined) {
        this['trx_id_list'] = trxIdList;
    }
    public get trxIdList(): string | undefined {
        return this['trx_id_list'];
    }
    public withStatusList(statusList: string): QueryReq {
        this['status_list'] = statusList;
        return this;
    }
    public set statusList(statusList: string  | undefined) {
        this['status_list'] = statusList;
    }
    public get statusList(): string | undefined {
        return this['status_list'];
    }
    public withSqlTemplateIds(sqlTemplateIds: string): QueryReq {
        this['sql_template_ids'] = sqlTemplateIds;
        return this;
    }
    public set sqlTemplateIds(sqlTemplateIds: string  | undefined) {
        this['sql_template_ids'] = sqlTemplateIds;
    }
    public get sqlTemplateIds(): string | undefined {
        return this['sql_template_ids'];
    }
}