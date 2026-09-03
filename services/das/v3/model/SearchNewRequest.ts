

export class SearchNewRequest {
    private 'instance_id'?: string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'task_id'?: number;
    private 'task_ids'?: Array<number>;
    private 'node_id'?: string;
    public keyword?: string;
    public fuzzy?: string;
    private 'user_list'?: string;
    private 'db_list'?: string;
    private 'operation_list'?: string;
    private 'client_ip_list'?: string;
    private 'thread_id_list'?: string;
    private 'trx_id_list'?: string;
    private 'session_id_list'?: string;
    private 'status_list'?: string;
    private 'sql_template_ids'?: string;
    private 'cost_min'?: number;
    private 'cost_max'?: number;
    private 'scan_min'?: number;
    private 'scan_max'?: number;
    private 'affect_min'?: number;
    private 'affect_max'?: number;
    private 'return_min'?: number;
    private 'return_max'?: number;
    private 'sort_field'?: string;
    public asc?: boolean;
    private 'page_no'?: number;
    private 'page_size'?: number;
    public constructor(instanceId?: string, startAt?: number, endAt?: number) { 
        this['instance_id'] = instanceId;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
    }
    public withInstanceId(instanceId: string): SearchNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStartAt(startAt: number): SearchNewRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): SearchNewRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withTaskId(taskId: number): SearchNewRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): number | undefined {
        return this['task_id'];
    }
    public withTaskIds(taskIds: Array<number>): SearchNewRequest {
        this['task_ids'] = taskIds;
        return this;
    }
    public set taskIds(taskIds: Array<number>  | undefined) {
        this['task_ids'] = taskIds;
    }
    public get taskIds(): Array<number> | undefined {
        return this['task_ids'];
    }
    public withNodeId(nodeId: string): SearchNewRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withKeyword(keyword: string): SearchNewRequest {
        this['keyword'] = keyword;
        return this;
    }
    public withFuzzy(fuzzy: string): SearchNewRequest {
        this['fuzzy'] = fuzzy;
        return this;
    }
    public withUserList(userList: string): SearchNewRequest {
        this['user_list'] = userList;
        return this;
    }
    public set userList(userList: string  | undefined) {
        this['user_list'] = userList;
    }
    public get userList(): string | undefined {
        return this['user_list'];
    }
    public withDbList(dbList: string): SearchNewRequest {
        this['db_list'] = dbList;
        return this;
    }
    public set dbList(dbList: string  | undefined) {
        this['db_list'] = dbList;
    }
    public get dbList(): string | undefined {
        return this['db_list'];
    }
    public withOperationList(operationList: string): SearchNewRequest {
        this['operation_list'] = operationList;
        return this;
    }
    public set operationList(operationList: string  | undefined) {
        this['operation_list'] = operationList;
    }
    public get operationList(): string | undefined {
        return this['operation_list'];
    }
    public withClientIpList(clientIpList: string): SearchNewRequest {
        this['client_ip_list'] = clientIpList;
        return this;
    }
    public set clientIpList(clientIpList: string  | undefined) {
        this['client_ip_list'] = clientIpList;
    }
    public get clientIpList(): string | undefined {
        return this['client_ip_list'];
    }
    public withThreadIdList(threadIdList: string): SearchNewRequest {
        this['thread_id_list'] = threadIdList;
        return this;
    }
    public set threadIdList(threadIdList: string  | undefined) {
        this['thread_id_list'] = threadIdList;
    }
    public get threadIdList(): string | undefined {
        return this['thread_id_list'];
    }
    public withTrxIdList(trxIdList: string): SearchNewRequest {
        this['trx_id_list'] = trxIdList;
        return this;
    }
    public set trxIdList(trxIdList: string  | undefined) {
        this['trx_id_list'] = trxIdList;
    }
    public get trxIdList(): string | undefined {
        return this['trx_id_list'];
    }
    public withSessionIdList(sessionIdList: string): SearchNewRequest {
        this['session_id_list'] = sessionIdList;
        return this;
    }
    public set sessionIdList(sessionIdList: string  | undefined) {
        this['session_id_list'] = sessionIdList;
    }
    public get sessionIdList(): string | undefined {
        return this['session_id_list'];
    }
    public withStatusList(statusList: string): SearchNewRequest {
        this['status_list'] = statusList;
        return this;
    }
    public set statusList(statusList: string  | undefined) {
        this['status_list'] = statusList;
    }
    public get statusList(): string | undefined {
        return this['status_list'];
    }
    public withSqlTemplateIds(sqlTemplateIds: string): SearchNewRequest {
        this['sql_template_ids'] = sqlTemplateIds;
        return this;
    }
    public set sqlTemplateIds(sqlTemplateIds: string  | undefined) {
        this['sql_template_ids'] = sqlTemplateIds;
    }
    public get sqlTemplateIds(): string | undefined {
        return this['sql_template_ids'];
    }
    public withCostMin(costMin: number): SearchNewRequest {
        this['cost_min'] = costMin;
        return this;
    }
    public set costMin(costMin: number  | undefined) {
        this['cost_min'] = costMin;
    }
    public get costMin(): number | undefined {
        return this['cost_min'];
    }
    public withCostMax(costMax: number): SearchNewRequest {
        this['cost_max'] = costMax;
        return this;
    }
    public set costMax(costMax: number  | undefined) {
        this['cost_max'] = costMax;
    }
    public get costMax(): number | undefined {
        return this['cost_max'];
    }
    public withScanMin(scanMin: number): SearchNewRequest {
        this['scan_min'] = scanMin;
        return this;
    }
    public set scanMin(scanMin: number  | undefined) {
        this['scan_min'] = scanMin;
    }
    public get scanMin(): number | undefined {
        return this['scan_min'];
    }
    public withScanMax(scanMax: number): SearchNewRequest {
        this['scan_max'] = scanMax;
        return this;
    }
    public set scanMax(scanMax: number  | undefined) {
        this['scan_max'] = scanMax;
    }
    public get scanMax(): number | undefined {
        return this['scan_max'];
    }
    public withAffectMin(affectMin: number): SearchNewRequest {
        this['affect_min'] = affectMin;
        return this;
    }
    public set affectMin(affectMin: number  | undefined) {
        this['affect_min'] = affectMin;
    }
    public get affectMin(): number | undefined {
        return this['affect_min'];
    }
    public withAffectMax(affectMax: number): SearchNewRequest {
        this['affect_max'] = affectMax;
        return this;
    }
    public set affectMax(affectMax: number  | undefined) {
        this['affect_max'] = affectMax;
    }
    public get affectMax(): number | undefined {
        return this['affect_max'];
    }
    public withReturnMin(returnMin: number): SearchNewRequest {
        this['return_min'] = returnMin;
        return this;
    }
    public set returnMin(returnMin: number  | undefined) {
        this['return_min'] = returnMin;
    }
    public get returnMin(): number | undefined {
        return this['return_min'];
    }
    public withReturnMax(returnMax: number): SearchNewRequest {
        this['return_max'] = returnMax;
        return this;
    }
    public set returnMax(returnMax: number  | undefined) {
        this['return_max'] = returnMax;
    }
    public get returnMax(): number | undefined {
        return this['return_max'];
    }
    public withSortField(sortField: string): SearchNewRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withAsc(asc: boolean): SearchNewRequest {
        this['asc'] = asc;
        return this;
    }
    public withPageNo(pageNo: number): SearchNewRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): SearchNewRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
}