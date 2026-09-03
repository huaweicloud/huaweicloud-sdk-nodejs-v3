

export class SqlParseTask {
    public id?: number;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'node_id'?: string;
    private 'domain_id'?: string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'batch_id'?: string;
    private 'user_list'?: Array<string>;
    public keyword?: Array<string>;
    private 'db_list'?: Array<string>;
    private 'operation_list'?: Array<string>;
    private 'thread_id_list'?: Array<string>;
    private 'trx_id_list'?: Array<string>;
    private 'status_list'?: Array<string>;
    private 'sql_template_ids'?: Array<string>;
    public status?: number;
    private 'create_at'?: number;
    private 'update_at'?: number;
    public progress?: number;
    public reason?: string;
    public constructor() { 
    }
    public withId(id: number): SqlParseTask {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): SqlParseTask {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): SqlParseTask {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withNodeId(nodeId: string): SqlParseTask {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withDomainId(domainId: string): SqlParseTask {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withStartAt(startAt: number): SqlParseTask {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): SqlParseTask {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withBatchId(batchId: string): SqlParseTask {
        this['batch_id'] = batchId;
        return this;
    }
    public set batchId(batchId: string  | undefined) {
        this['batch_id'] = batchId;
    }
    public get batchId(): string | undefined {
        return this['batch_id'];
    }
    public withUserList(userList: Array<string>): SqlParseTask {
        this['user_list'] = userList;
        return this;
    }
    public set userList(userList: Array<string>  | undefined) {
        this['user_list'] = userList;
    }
    public get userList(): Array<string> | undefined {
        return this['user_list'];
    }
    public withKeyword(keyword: Array<string>): SqlParseTask {
        this['keyword'] = keyword;
        return this;
    }
    public withDbList(dbList: Array<string>): SqlParseTask {
        this['db_list'] = dbList;
        return this;
    }
    public set dbList(dbList: Array<string>  | undefined) {
        this['db_list'] = dbList;
    }
    public get dbList(): Array<string> | undefined {
        return this['db_list'];
    }
    public withOperationList(operationList: Array<string>): SqlParseTask {
        this['operation_list'] = operationList;
        return this;
    }
    public set operationList(operationList: Array<string>  | undefined) {
        this['operation_list'] = operationList;
    }
    public get operationList(): Array<string> | undefined {
        return this['operation_list'];
    }
    public withThreadIdList(threadIdList: Array<string>): SqlParseTask {
        this['thread_id_list'] = threadIdList;
        return this;
    }
    public set threadIdList(threadIdList: Array<string>  | undefined) {
        this['thread_id_list'] = threadIdList;
    }
    public get threadIdList(): Array<string> | undefined {
        return this['thread_id_list'];
    }
    public withTrxIdList(trxIdList: Array<string>): SqlParseTask {
        this['trx_id_list'] = trxIdList;
        return this;
    }
    public set trxIdList(trxIdList: Array<string>  | undefined) {
        this['trx_id_list'] = trxIdList;
    }
    public get trxIdList(): Array<string> | undefined {
        return this['trx_id_list'];
    }
    public withStatusList(statusList: Array<string>): SqlParseTask {
        this['status_list'] = statusList;
        return this;
    }
    public set statusList(statusList: Array<string>  | undefined) {
        this['status_list'] = statusList;
    }
    public get statusList(): Array<string> | undefined {
        return this['status_list'];
    }
    public withSqlTemplateIds(sqlTemplateIds: Array<string>): SqlParseTask {
        this['sql_template_ids'] = sqlTemplateIds;
        return this;
    }
    public set sqlTemplateIds(sqlTemplateIds: Array<string>  | undefined) {
        this['sql_template_ids'] = sqlTemplateIds;
    }
    public get sqlTemplateIds(): Array<string> | undefined {
        return this['sql_template_ids'];
    }
    public withStatus(status: number): SqlParseTask {
        this['status'] = status;
        return this;
    }
    public withCreateAt(createAt: number): SqlParseTask {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: number): SqlParseTask {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
    public withProgress(progress: number): SqlParseTask {
        this['progress'] = progress;
        return this;
    }
    public withReason(reason: string): SqlParseTask {
        this['reason'] = reason;
        return this;
    }
}