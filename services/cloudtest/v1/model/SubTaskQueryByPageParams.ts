

export class SubTaskQueryByPageParams {
    public more?: boolean;
    public notSetReleaseDev?: boolean;
    private 'page_number'?: number;
    private 'page_size'?: number;
    private 'parent_sub_task_id'?: string;
    private 'plan_id'?: string;
    private 'release_dev'?: Array<string>;
    public results?: Array<number>;
    private 'start_time_begin'?: number;
    private 'start_time_end'?: number;
    public state?: number;
    public states?: Array<number>;
    private 'sub_task_id'?: string;
    private 'suite_type'?: number;
    private 'task_id'?: string;
    private 'task_type_id'?: string;
    private 'test_service_id'?: string;
    public constructor() { 
    }
    public withMore(more: boolean): SubTaskQueryByPageParams {
        this['more'] = more;
        return this;
    }
    public withNotSetReleaseDev(notSetReleaseDev: boolean): SubTaskQueryByPageParams {
        this['notSetReleaseDev'] = notSetReleaseDev;
        return this;
    }
    public withPageNumber(pageNumber: number): SubTaskQueryByPageParams {
        this['page_number'] = pageNumber;
        return this;
    }
    public set pageNumber(pageNumber: number  | undefined) {
        this['page_number'] = pageNumber;
    }
    public get pageNumber(): number | undefined {
        return this['page_number'];
    }
    public withPageSize(pageSize: number): SubTaskQueryByPageParams {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withParentSubTaskId(parentSubTaskId: string): SubTaskQueryByPageParams {
        this['parent_sub_task_id'] = parentSubTaskId;
        return this;
    }
    public set parentSubTaskId(parentSubTaskId: string  | undefined) {
        this['parent_sub_task_id'] = parentSubTaskId;
    }
    public get parentSubTaskId(): string | undefined {
        return this['parent_sub_task_id'];
    }
    public withPlanId(planId: string): SubTaskQueryByPageParams {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withReleaseDev(releaseDev: Array<string>): SubTaskQueryByPageParams {
        this['release_dev'] = releaseDev;
        return this;
    }
    public set releaseDev(releaseDev: Array<string>  | undefined) {
        this['release_dev'] = releaseDev;
    }
    public get releaseDev(): Array<string> | undefined {
        return this['release_dev'];
    }
    public withResults(results: Array<number>): SubTaskQueryByPageParams {
        this['results'] = results;
        return this;
    }
    public withStartTimeBegin(startTimeBegin: number): SubTaskQueryByPageParams {
        this['start_time_begin'] = startTimeBegin;
        return this;
    }
    public set startTimeBegin(startTimeBegin: number  | undefined) {
        this['start_time_begin'] = startTimeBegin;
    }
    public get startTimeBegin(): number | undefined {
        return this['start_time_begin'];
    }
    public withStartTimeEnd(startTimeEnd: number): SubTaskQueryByPageParams {
        this['start_time_end'] = startTimeEnd;
        return this;
    }
    public set startTimeEnd(startTimeEnd: number  | undefined) {
        this['start_time_end'] = startTimeEnd;
    }
    public get startTimeEnd(): number | undefined {
        return this['start_time_end'];
    }
    public withState(state: number): SubTaskQueryByPageParams {
        this['state'] = state;
        return this;
    }
    public withStates(states: Array<number>): SubTaskQueryByPageParams {
        this['states'] = states;
        return this;
    }
    public withSubTaskId(subTaskId: string): SubTaskQueryByPageParams {
        this['sub_task_id'] = subTaskId;
        return this;
    }
    public set subTaskId(subTaskId: string  | undefined) {
        this['sub_task_id'] = subTaskId;
    }
    public get subTaskId(): string | undefined {
        return this['sub_task_id'];
    }
    public withSuiteType(suiteType: number): SubTaskQueryByPageParams {
        this['suite_type'] = suiteType;
        return this;
    }
    public set suiteType(suiteType: number  | undefined) {
        this['suite_type'] = suiteType;
    }
    public get suiteType(): number | undefined {
        return this['suite_type'];
    }
    public withTaskId(taskId: string): SubTaskQueryByPageParams {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskTypeId(taskTypeId: string): SubTaskQueryByPageParams {
        this['task_type_id'] = taskTypeId;
        return this;
    }
    public set taskTypeId(taskTypeId: string  | undefined) {
        this['task_type_id'] = taskTypeId;
    }
    public get taskTypeId(): string | undefined {
        return this['task_type_id'];
    }
    public withTestServiceId(testServiceId: string): SubTaskQueryByPageParams {
        this['test_service_id'] = testServiceId;
        return this;
    }
    public set testServiceId(testServiceId: string  | undefined) {
        this['test_service_id'] = testServiceId;
    }
    public get testServiceId(): string | undefined {
        return this['test_service_id'];
    }
}