

export class TasksQueryInfo {
    public uris?: Array<string>;
    public keyword?: string;
    public tags?: Array<string>;
    public own?: boolean;
    private 'service_type'?: number;
    private 'release_dev_list'?: Array<string>;
    private 'result_codes'?: Array<string>;
    private 'status_codes'?: Array<string>;
    private 'owner_ids'?: Array<string>;
    private 'executor_ids'?: Array<string>;
    private 'creator_ids'?: Array<string>;
    private 'sort_field'?: string;
    private 'sort_type'?: string;
    private 'page_no'?: number;
    private 'page_size'?: number;
    private 'is_polling_query'?: boolean;
    private 'is_query_associated_case_list'?: boolean;
    private 'plan_start_start_timestamp'?: number;
    private 'plan_start_end_timestamp'?: number;
    private 'plan_end_start_timestamp'?: number;
    private 'plan_end_end_timestamp'?: number;
    private 'expiration_status_list'?: Array<number>;
    public constructor() { 
    }
    public withUris(uris: Array<string>): TasksQueryInfo {
        this['uris'] = uris;
        return this;
    }
    public withKeyword(keyword: string): TasksQueryInfo {
        this['keyword'] = keyword;
        return this;
    }
    public withTags(tags: Array<string>): TasksQueryInfo {
        this['tags'] = tags;
        return this;
    }
    public withOwn(own: boolean): TasksQueryInfo {
        this['own'] = own;
        return this;
    }
    public withServiceType(serviceType: number): TasksQueryInfo {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: number  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): number | undefined {
        return this['service_type'];
    }
    public withReleaseDevList(releaseDevList: Array<string>): TasksQueryInfo {
        this['release_dev_list'] = releaseDevList;
        return this;
    }
    public set releaseDevList(releaseDevList: Array<string>  | undefined) {
        this['release_dev_list'] = releaseDevList;
    }
    public get releaseDevList(): Array<string> | undefined {
        return this['release_dev_list'];
    }
    public withResultCodes(resultCodes: Array<string>): TasksQueryInfo {
        this['result_codes'] = resultCodes;
        return this;
    }
    public set resultCodes(resultCodes: Array<string>  | undefined) {
        this['result_codes'] = resultCodes;
    }
    public get resultCodes(): Array<string> | undefined {
        return this['result_codes'];
    }
    public withStatusCodes(statusCodes: Array<string>): TasksQueryInfo {
        this['status_codes'] = statusCodes;
        return this;
    }
    public set statusCodes(statusCodes: Array<string>  | undefined) {
        this['status_codes'] = statusCodes;
    }
    public get statusCodes(): Array<string> | undefined {
        return this['status_codes'];
    }
    public withOwnerIds(ownerIds: Array<string>): TasksQueryInfo {
        this['owner_ids'] = ownerIds;
        return this;
    }
    public set ownerIds(ownerIds: Array<string>  | undefined) {
        this['owner_ids'] = ownerIds;
    }
    public get ownerIds(): Array<string> | undefined {
        return this['owner_ids'];
    }
    public withExecutorIds(executorIds: Array<string>): TasksQueryInfo {
        this['executor_ids'] = executorIds;
        return this;
    }
    public set executorIds(executorIds: Array<string>  | undefined) {
        this['executor_ids'] = executorIds;
    }
    public get executorIds(): Array<string> | undefined {
        return this['executor_ids'];
    }
    public withCreatorIds(creatorIds: Array<string>): TasksQueryInfo {
        this['creator_ids'] = creatorIds;
        return this;
    }
    public set creatorIds(creatorIds: Array<string>  | undefined) {
        this['creator_ids'] = creatorIds;
    }
    public get creatorIds(): Array<string> | undefined {
        return this['creator_ids'];
    }
    public withSortField(sortField: string): TasksQueryInfo {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withSortType(sortType: string): TasksQueryInfo {
        this['sort_type'] = sortType;
        return this;
    }
    public set sortType(sortType: string  | undefined) {
        this['sort_type'] = sortType;
    }
    public get sortType(): string | undefined {
        return this['sort_type'];
    }
    public withPageNo(pageNo: number): TasksQueryInfo {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): TasksQueryInfo {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withIsPollingQuery(isPollingQuery: boolean): TasksQueryInfo {
        this['is_polling_query'] = isPollingQuery;
        return this;
    }
    public set isPollingQuery(isPollingQuery: boolean  | undefined) {
        this['is_polling_query'] = isPollingQuery;
    }
    public get isPollingQuery(): boolean | undefined {
        return this['is_polling_query'];
    }
    public withIsQueryAssociatedCaseList(isQueryAssociatedCaseList: boolean): TasksQueryInfo {
        this['is_query_associated_case_list'] = isQueryAssociatedCaseList;
        return this;
    }
    public set isQueryAssociatedCaseList(isQueryAssociatedCaseList: boolean  | undefined) {
        this['is_query_associated_case_list'] = isQueryAssociatedCaseList;
    }
    public get isQueryAssociatedCaseList(): boolean | undefined {
        return this['is_query_associated_case_list'];
    }
    public withPlanStartStartTimestamp(planStartStartTimestamp: number): TasksQueryInfo {
        this['plan_start_start_timestamp'] = planStartStartTimestamp;
        return this;
    }
    public set planStartStartTimestamp(planStartStartTimestamp: number  | undefined) {
        this['plan_start_start_timestamp'] = planStartStartTimestamp;
    }
    public get planStartStartTimestamp(): number | undefined {
        return this['plan_start_start_timestamp'];
    }
    public withPlanStartEndTimestamp(planStartEndTimestamp: number): TasksQueryInfo {
        this['plan_start_end_timestamp'] = planStartEndTimestamp;
        return this;
    }
    public set planStartEndTimestamp(planStartEndTimestamp: number  | undefined) {
        this['plan_start_end_timestamp'] = planStartEndTimestamp;
    }
    public get planStartEndTimestamp(): number | undefined {
        return this['plan_start_end_timestamp'];
    }
    public withPlanEndStartTimestamp(planEndStartTimestamp: number): TasksQueryInfo {
        this['plan_end_start_timestamp'] = planEndStartTimestamp;
        return this;
    }
    public set planEndStartTimestamp(planEndStartTimestamp: number  | undefined) {
        this['plan_end_start_timestamp'] = planEndStartTimestamp;
    }
    public get planEndStartTimestamp(): number | undefined {
        return this['plan_end_start_timestamp'];
    }
    public withPlanEndEndTimestamp(planEndEndTimestamp: number): TasksQueryInfo {
        this['plan_end_end_timestamp'] = planEndEndTimestamp;
        return this;
    }
    public set planEndEndTimestamp(planEndEndTimestamp: number  | undefined) {
        this['plan_end_end_timestamp'] = planEndEndTimestamp;
    }
    public get planEndEndTimestamp(): number | undefined {
        return this['plan_end_end_timestamp'];
    }
    public withExpirationStatusList(expirationStatusList: Array<number>): TasksQueryInfo {
        this['expiration_status_list'] = expirationStatusList;
        return this;
    }
    public set expirationStatusList(expirationStatusList: Array<number>  | undefined) {
        this['expiration_status_list'] = expirationStatusList;
    }
    public get expirationStatusList(): Array<number> | undefined {
        return this['expiration_status_list'];
    }
}