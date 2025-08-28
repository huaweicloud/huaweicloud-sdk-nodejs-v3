

export class AddFullSqlTaskBody {
    private 'datastore_type'?: string;
    private 'node_id'?: string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'user_list'?: Array<string>;
    private 'keyword_list'?: Array<string>;
    private 'db_list'?: Array<string>;
    private 'operation_list'?: Array<string>;
    private 'thread_id_list'?: Array<string>;
    private 'status_list'?: Array<string>;
    public constructor(datastoreType?: string, startAt?: number, endAt?: number) { 
        this['datastore_type'] = datastoreType;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
    }
    public withDatastoreType(datastoreType: string): AddFullSqlTaskBody {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withNodeId(nodeId: string): AddFullSqlTaskBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withStartAt(startAt: number): AddFullSqlTaskBody {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): AddFullSqlTaskBody {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withUserList(userList: Array<string>): AddFullSqlTaskBody {
        this['user_list'] = userList;
        return this;
    }
    public set userList(userList: Array<string>  | undefined) {
        this['user_list'] = userList;
    }
    public get userList(): Array<string> | undefined {
        return this['user_list'];
    }
    public withKeywordList(keywordList: Array<string>): AddFullSqlTaskBody {
        this['keyword_list'] = keywordList;
        return this;
    }
    public set keywordList(keywordList: Array<string>  | undefined) {
        this['keyword_list'] = keywordList;
    }
    public get keywordList(): Array<string> | undefined {
        return this['keyword_list'];
    }
    public withDbList(dbList: Array<string>): AddFullSqlTaskBody {
        this['db_list'] = dbList;
        return this;
    }
    public set dbList(dbList: Array<string>  | undefined) {
        this['db_list'] = dbList;
    }
    public get dbList(): Array<string> | undefined {
        return this['db_list'];
    }
    public withOperationList(operationList: Array<string>): AddFullSqlTaskBody {
        this['operation_list'] = operationList;
        return this;
    }
    public set operationList(operationList: Array<string>  | undefined) {
        this['operation_list'] = operationList;
    }
    public get operationList(): Array<string> | undefined {
        return this['operation_list'];
    }
    public withThreadIdList(threadIdList: Array<string>): AddFullSqlTaskBody {
        this['thread_id_list'] = threadIdList;
        return this;
    }
    public set threadIdList(threadIdList: Array<string>  | undefined) {
        this['thread_id_list'] = threadIdList;
    }
    public get threadIdList(): Array<string> | undefined {
        return this['thread_id_list'];
    }
    public withStatusList(statusList: Array<string>): AddFullSqlTaskBody {
        this['status_list'] = statusList;
        return this;
    }
    public set statusList(statusList: Array<string>  | undefined) {
        this['status_list'] = statusList;
    }
    public get statusList(): Array<string> | undefined {
        return this['status_list'];
    }
}