

export class ExportFullSqlRequestBody {
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'task_ids'?: Array<number>;
    private 'node_id'?: string;
    public keyword?: string;
    public fuzzy?: boolean;
    private 'user_list'?: Array<string>;
    private 'db_list'?: Array<string>;
    private 'operation_list'?: Array<string>;
    private 'client_ip_list'?: Array<string>;
    private 'thread_id_list'?: Array<number>;
    private 'trx_id_list'?: Array<number>;
    private 'session_id_list'?: Array<number>;
    private 'status_list'?: Array<number>;
    private 'cost_min'?: number;
    private 'cost_max'?: number;
    private 'scan_min'?: number;
    private 'scan_max'?: number;
    private 'affect_min'?: number;
    private 'affect_max'?: number;
    private 'return_min'?: number;
    private 'return_max'?: number;
    private 'bucket_name'?: string;
    private 'export_column_list'?: Array<string>;
    private 'time_zone'?: string;
    private 'instance_id'?: string;
    private 'task_id'?: number;
    public constructor(startAt?: number, endAt?: number) { 
        this['start_at'] = startAt;
        this['end_at'] = endAt;
    }
    public withStartAt(startAt: number): ExportFullSqlRequestBody {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ExportFullSqlRequestBody {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withTaskIds(taskIds: Array<number>): ExportFullSqlRequestBody {
        this['task_ids'] = taskIds;
        return this;
    }
    public set taskIds(taskIds: Array<number>  | undefined) {
        this['task_ids'] = taskIds;
    }
    public get taskIds(): Array<number> | undefined {
        return this['task_ids'];
    }
    public withNodeId(nodeId: string): ExportFullSqlRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withKeyword(keyword: string): ExportFullSqlRequestBody {
        this['keyword'] = keyword;
        return this;
    }
    public withFuzzy(fuzzy: boolean): ExportFullSqlRequestBody {
        this['fuzzy'] = fuzzy;
        return this;
    }
    public withUserList(userList: Array<string>): ExportFullSqlRequestBody {
        this['user_list'] = userList;
        return this;
    }
    public set userList(userList: Array<string>  | undefined) {
        this['user_list'] = userList;
    }
    public get userList(): Array<string> | undefined {
        return this['user_list'];
    }
    public withDbList(dbList: Array<string>): ExportFullSqlRequestBody {
        this['db_list'] = dbList;
        return this;
    }
    public set dbList(dbList: Array<string>  | undefined) {
        this['db_list'] = dbList;
    }
    public get dbList(): Array<string> | undefined {
        return this['db_list'];
    }
    public withOperationList(operationList: Array<string>): ExportFullSqlRequestBody {
        this['operation_list'] = operationList;
        return this;
    }
    public set operationList(operationList: Array<string>  | undefined) {
        this['operation_list'] = operationList;
    }
    public get operationList(): Array<string> | undefined {
        return this['operation_list'];
    }
    public withClientIpList(clientIpList: Array<string>): ExportFullSqlRequestBody {
        this['client_ip_list'] = clientIpList;
        return this;
    }
    public set clientIpList(clientIpList: Array<string>  | undefined) {
        this['client_ip_list'] = clientIpList;
    }
    public get clientIpList(): Array<string> | undefined {
        return this['client_ip_list'];
    }
    public withThreadIdList(threadIdList: Array<number>): ExportFullSqlRequestBody {
        this['thread_id_list'] = threadIdList;
        return this;
    }
    public set threadIdList(threadIdList: Array<number>  | undefined) {
        this['thread_id_list'] = threadIdList;
    }
    public get threadIdList(): Array<number> | undefined {
        return this['thread_id_list'];
    }
    public withTrxIdList(trxIdList: Array<number>): ExportFullSqlRequestBody {
        this['trx_id_list'] = trxIdList;
        return this;
    }
    public set trxIdList(trxIdList: Array<number>  | undefined) {
        this['trx_id_list'] = trxIdList;
    }
    public get trxIdList(): Array<number> | undefined {
        return this['trx_id_list'];
    }
    public withSessionIdList(sessionIdList: Array<number>): ExportFullSqlRequestBody {
        this['session_id_list'] = sessionIdList;
        return this;
    }
    public set sessionIdList(sessionIdList: Array<number>  | undefined) {
        this['session_id_list'] = sessionIdList;
    }
    public get sessionIdList(): Array<number> | undefined {
        return this['session_id_list'];
    }
    public withStatusList(statusList: Array<number>): ExportFullSqlRequestBody {
        this['status_list'] = statusList;
        return this;
    }
    public set statusList(statusList: Array<number>  | undefined) {
        this['status_list'] = statusList;
    }
    public get statusList(): Array<number> | undefined {
        return this['status_list'];
    }
    public withCostMin(costMin: number): ExportFullSqlRequestBody {
        this['cost_min'] = costMin;
        return this;
    }
    public set costMin(costMin: number  | undefined) {
        this['cost_min'] = costMin;
    }
    public get costMin(): number | undefined {
        return this['cost_min'];
    }
    public withCostMax(costMax: number): ExportFullSqlRequestBody {
        this['cost_max'] = costMax;
        return this;
    }
    public set costMax(costMax: number  | undefined) {
        this['cost_max'] = costMax;
    }
    public get costMax(): number | undefined {
        return this['cost_max'];
    }
    public withScanMin(scanMin: number): ExportFullSqlRequestBody {
        this['scan_min'] = scanMin;
        return this;
    }
    public set scanMin(scanMin: number  | undefined) {
        this['scan_min'] = scanMin;
    }
    public get scanMin(): number | undefined {
        return this['scan_min'];
    }
    public withScanMax(scanMax: number): ExportFullSqlRequestBody {
        this['scan_max'] = scanMax;
        return this;
    }
    public set scanMax(scanMax: number  | undefined) {
        this['scan_max'] = scanMax;
    }
    public get scanMax(): number | undefined {
        return this['scan_max'];
    }
    public withAffectMin(affectMin: number): ExportFullSqlRequestBody {
        this['affect_min'] = affectMin;
        return this;
    }
    public set affectMin(affectMin: number  | undefined) {
        this['affect_min'] = affectMin;
    }
    public get affectMin(): number | undefined {
        return this['affect_min'];
    }
    public withAffectMax(affectMax: number): ExportFullSqlRequestBody {
        this['affect_max'] = affectMax;
        return this;
    }
    public set affectMax(affectMax: number  | undefined) {
        this['affect_max'] = affectMax;
    }
    public get affectMax(): number | undefined {
        return this['affect_max'];
    }
    public withReturnMin(returnMin: number): ExportFullSqlRequestBody {
        this['return_min'] = returnMin;
        return this;
    }
    public set returnMin(returnMin: number  | undefined) {
        this['return_min'] = returnMin;
    }
    public get returnMin(): number | undefined {
        return this['return_min'];
    }
    public withReturnMax(returnMax: number): ExportFullSqlRequestBody {
        this['return_max'] = returnMax;
        return this;
    }
    public set returnMax(returnMax: number  | undefined) {
        this['return_max'] = returnMax;
    }
    public get returnMax(): number | undefined {
        return this['return_max'];
    }
    public withBucketName(bucketName: string): ExportFullSqlRequestBody {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withExportColumnList(exportColumnList: Array<string>): ExportFullSqlRequestBody {
        this['export_column_list'] = exportColumnList;
        return this;
    }
    public set exportColumnList(exportColumnList: Array<string>  | undefined) {
        this['export_column_list'] = exportColumnList;
    }
    public get exportColumnList(): Array<string> | undefined {
        return this['export_column_list'];
    }
    public withTimeZone(timeZone: string): ExportFullSqlRequestBody {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withInstanceId(instanceId: string): ExportFullSqlRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTaskId(taskId: number): ExportFullSqlRequestBody {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): number | undefined {
        return this['task_id'];
    }
}