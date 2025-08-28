

export class ExportFullSqlDetailsRequest {
    private 'instance_id'?: string;
    private 'start_at'?: number;
    private 'end_at'?: number;
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
    public page?: number;
    public limit?: number;
    private 'X-Language'?: ExportFullSqlDetailsRequestXLanguageEnum | string;
    public constructor(instanceId?: string, startAt?: number, endAt?: number) { 
        this['instance_id'] = instanceId;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
    }
    public withInstanceId(instanceId: string): ExportFullSqlDetailsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStartAt(startAt: number): ExportFullSqlDetailsRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ExportFullSqlDetailsRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withTaskIds(taskIds: Array<number>): ExportFullSqlDetailsRequest {
        this['task_ids'] = taskIds;
        return this;
    }
    public set taskIds(taskIds: Array<number>  | undefined) {
        this['task_ids'] = taskIds;
    }
    public get taskIds(): Array<number> | undefined {
        return this['task_ids'];
    }
    public withNodeId(nodeId: string): ExportFullSqlDetailsRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withKeyword(keyword: string): ExportFullSqlDetailsRequest {
        this['keyword'] = keyword;
        return this;
    }
    public withFuzzy(fuzzy: string): ExportFullSqlDetailsRequest {
        this['fuzzy'] = fuzzy;
        return this;
    }
    public withUserList(userList: string): ExportFullSqlDetailsRequest {
        this['user_list'] = userList;
        return this;
    }
    public set userList(userList: string  | undefined) {
        this['user_list'] = userList;
    }
    public get userList(): string | undefined {
        return this['user_list'];
    }
    public withDbList(dbList: string): ExportFullSqlDetailsRequest {
        this['db_list'] = dbList;
        return this;
    }
    public set dbList(dbList: string  | undefined) {
        this['db_list'] = dbList;
    }
    public get dbList(): string | undefined {
        return this['db_list'];
    }
    public withOperationList(operationList: string): ExportFullSqlDetailsRequest {
        this['operation_list'] = operationList;
        return this;
    }
    public set operationList(operationList: string  | undefined) {
        this['operation_list'] = operationList;
    }
    public get operationList(): string | undefined {
        return this['operation_list'];
    }
    public withClientIpList(clientIpList: string): ExportFullSqlDetailsRequest {
        this['client_ip_list'] = clientIpList;
        return this;
    }
    public set clientIpList(clientIpList: string  | undefined) {
        this['client_ip_list'] = clientIpList;
    }
    public get clientIpList(): string | undefined {
        return this['client_ip_list'];
    }
    public withThreadIdList(threadIdList: string): ExportFullSqlDetailsRequest {
        this['thread_id_list'] = threadIdList;
        return this;
    }
    public set threadIdList(threadIdList: string  | undefined) {
        this['thread_id_list'] = threadIdList;
    }
    public get threadIdList(): string | undefined {
        return this['thread_id_list'];
    }
    public withTrxIdList(trxIdList: string): ExportFullSqlDetailsRequest {
        this['trx_id_list'] = trxIdList;
        return this;
    }
    public set trxIdList(trxIdList: string  | undefined) {
        this['trx_id_list'] = trxIdList;
    }
    public get trxIdList(): string | undefined {
        return this['trx_id_list'];
    }
    public withSessionIdList(sessionIdList: string): ExportFullSqlDetailsRequest {
        this['session_id_list'] = sessionIdList;
        return this;
    }
    public set sessionIdList(sessionIdList: string  | undefined) {
        this['session_id_list'] = sessionIdList;
    }
    public get sessionIdList(): string | undefined {
        return this['session_id_list'];
    }
    public withStatusList(statusList: string): ExportFullSqlDetailsRequest {
        this['status_list'] = statusList;
        return this;
    }
    public set statusList(statusList: string  | undefined) {
        this['status_list'] = statusList;
    }
    public get statusList(): string | undefined {
        return this['status_list'];
    }
    public withSqlTemplateIds(sqlTemplateIds: string): ExportFullSqlDetailsRequest {
        this['sql_template_ids'] = sqlTemplateIds;
        return this;
    }
    public set sqlTemplateIds(sqlTemplateIds: string  | undefined) {
        this['sql_template_ids'] = sqlTemplateIds;
    }
    public get sqlTemplateIds(): string | undefined {
        return this['sql_template_ids'];
    }
    public withCostMin(costMin: number): ExportFullSqlDetailsRequest {
        this['cost_min'] = costMin;
        return this;
    }
    public set costMin(costMin: number  | undefined) {
        this['cost_min'] = costMin;
    }
    public get costMin(): number | undefined {
        return this['cost_min'];
    }
    public withCostMax(costMax: number): ExportFullSqlDetailsRequest {
        this['cost_max'] = costMax;
        return this;
    }
    public set costMax(costMax: number  | undefined) {
        this['cost_max'] = costMax;
    }
    public get costMax(): number | undefined {
        return this['cost_max'];
    }
    public withScanMin(scanMin: number): ExportFullSqlDetailsRequest {
        this['scan_min'] = scanMin;
        return this;
    }
    public set scanMin(scanMin: number  | undefined) {
        this['scan_min'] = scanMin;
    }
    public get scanMin(): number | undefined {
        return this['scan_min'];
    }
    public withScanMax(scanMax: number): ExportFullSqlDetailsRequest {
        this['scan_max'] = scanMax;
        return this;
    }
    public set scanMax(scanMax: number  | undefined) {
        this['scan_max'] = scanMax;
    }
    public get scanMax(): number | undefined {
        return this['scan_max'];
    }
    public withAffectMin(affectMin: number): ExportFullSqlDetailsRequest {
        this['affect_min'] = affectMin;
        return this;
    }
    public set affectMin(affectMin: number  | undefined) {
        this['affect_min'] = affectMin;
    }
    public get affectMin(): number | undefined {
        return this['affect_min'];
    }
    public withAffectMax(affectMax: number): ExportFullSqlDetailsRequest {
        this['affect_max'] = affectMax;
        return this;
    }
    public set affectMax(affectMax: number  | undefined) {
        this['affect_max'] = affectMax;
    }
    public get affectMax(): number | undefined {
        return this['affect_max'];
    }
    public withReturnMin(returnMin: number): ExportFullSqlDetailsRequest {
        this['return_min'] = returnMin;
        return this;
    }
    public set returnMin(returnMin: number  | undefined) {
        this['return_min'] = returnMin;
    }
    public get returnMin(): number | undefined {
        return this['return_min'];
    }
    public withReturnMax(returnMax: number): ExportFullSqlDetailsRequest {
        this['return_max'] = returnMax;
        return this;
    }
    public set returnMax(returnMax: number  | undefined) {
        this['return_max'] = returnMax;
    }
    public get returnMax(): number | undefined {
        return this['return_max'];
    }
    public withSortField(sortField: string): ExportFullSqlDetailsRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withAsc(asc: boolean): ExportFullSqlDetailsRequest {
        this['asc'] = asc;
        return this;
    }
    public withPage(page: number): ExportFullSqlDetailsRequest {
        this['page'] = page;
        return this;
    }
    public withLimit(limit: number): ExportFullSqlDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withXLanguage(xLanguage: ExportFullSqlDetailsRequestXLanguageEnum | string): ExportFullSqlDetailsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExportFullSqlDetailsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExportFullSqlDetailsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportFullSqlDetailsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
