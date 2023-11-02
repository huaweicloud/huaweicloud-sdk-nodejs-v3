

export class ListQualityTaskListsRequest {
    public start?: number;
    private 'page_size'?: number;
    public offset?: number;
    public limit?: number;
    private 'category_id'?: number;
    private 'rule_name'?: string;
    private 'schedule_status'?: number;
    private 'schedule_period'?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'result_status'?: number;
    public sort?: string;
    public order?: string;
    public constructor() { 
    }
    public withStart(start: number): ListQualityTaskListsRequest {
        this['start'] = start;
        return this;
    }
    public withPageSize(pageSize: number): ListQualityTaskListsRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withOffset(offset: number): ListQualityTaskListsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListQualityTaskListsRequest {
        this['limit'] = limit;
        return this;
    }
    public withCategoryId(categoryId: number): ListQualityTaskListsRequest {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: number  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): number | undefined {
        return this['category_id'];
    }
    public withRuleName(ruleName: string): ListQualityTaskListsRequest {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withScheduleStatus(scheduleStatus: number): ListQualityTaskListsRequest {
        this['schedule_status'] = scheduleStatus;
        return this;
    }
    public set scheduleStatus(scheduleStatus: number  | undefined) {
        this['schedule_status'] = scheduleStatus;
    }
    public get scheduleStatus(): number | undefined {
        return this['schedule_status'];
    }
    public withSchedulePeriod(schedulePeriod: number): ListQualityTaskListsRequest {
        this['schedule_period'] = schedulePeriod;
        return this;
    }
    public set schedulePeriod(schedulePeriod: number  | undefined) {
        this['schedule_period'] = schedulePeriod;
    }
    public get schedulePeriod(): number | undefined {
        return this['schedule_period'];
    }
    public withStartTime(startTime: string): ListQualityTaskListsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListQualityTaskListsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withResultStatus(resultStatus: number): ListQualityTaskListsRequest {
        this['result_status'] = resultStatus;
        return this;
    }
    public set resultStatus(resultStatus: number  | undefined) {
        this['result_status'] = resultStatus;
    }
    public get resultStatus(): number | undefined {
        return this['result_status'];
    }
    public withSort(sort: string): ListQualityTaskListsRequest {
        this['sort'] = sort;
        return this;
    }
    public withOrder(order: string): ListQualityTaskListsRequest {
        this['order'] = order;
        return this;
    }
}