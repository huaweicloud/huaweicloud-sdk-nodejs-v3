

export class SubTaskCaseQuery {
    private 'create_user'?: string;
    public endTime?: number;
    public keyWord?: string;
    private 'location_id'?: string;
    public more?: boolean;
    private 'page_num'?: number;
    private 'page_size'?: number;
    public pid?: string;
    public results?: Array<number>;
    public sortBy?: string;
    public stage?: number;
    public startTime?: number;
    public state?: string;
    private 'subtask_ids'?: Array<string>;
    private 'subtask_id'?: string;
    public suiteType?: number;
    private 'task_id'?: string;
    private 'task_ids'?: Array<string>;
    public taskTypeId?: string;
    private 'test_service_id'?: string;
    private 'testcase_id'?: string;
    public constructor() { 
    }
    public withCreateUser(createUser: string): SubTaskCaseQuery {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withEndTime(endTime: number): SubTaskCaseQuery {
        this['endTime'] = endTime;
        return this;
    }
    public withKeyWord(keyWord: string): SubTaskCaseQuery {
        this['keyWord'] = keyWord;
        return this;
    }
    public withLocationId(locationId: string): SubTaskCaseQuery {
        this['location_id'] = locationId;
        return this;
    }
    public set locationId(locationId: string  | undefined) {
        this['location_id'] = locationId;
    }
    public get locationId(): string | undefined {
        return this['location_id'];
    }
    public withMore(more: boolean): SubTaskCaseQuery {
        this['more'] = more;
        return this;
    }
    public withPageNum(pageNum: number): SubTaskCaseQuery {
        this['page_num'] = pageNum;
        return this;
    }
    public set pageNum(pageNum: number  | undefined) {
        this['page_num'] = pageNum;
    }
    public get pageNum(): number | undefined {
        return this['page_num'];
    }
    public withPageSize(pageSize: number): SubTaskCaseQuery {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withPid(pid: string): SubTaskCaseQuery {
        this['pid'] = pid;
        return this;
    }
    public withResults(results: Array<number>): SubTaskCaseQuery {
        this['results'] = results;
        return this;
    }
    public withSortBy(sortBy: string): SubTaskCaseQuery {
        this['sortBy'] = sortBy;
        return this;
    }
    public withStage(stage: number): SubTaskCaseQuery {
        this['stage'] = stage;
        return this;
    }
    public withStartTime(startTime: number): SubTaskCaseQuery {
        this['startTime'] = startTime;
        return this;
    }
    public withState(state: string): SubTaskCaseQuery {
        this['state'] = state;
        return this;
    }
    public withSubtaskIds(subtaskIds: Array<string>): SubTaskCaseQuery {
        this['subtask_ids'] = subtaskIds;
        return this;
    }
    public set subtaskIds(subtaskIds: Array<string>  | undefined) {
        this['subtask_ids'] = subtaskIds;
    }
    public get subtaskIds(): Array<string> | undefined {
        return this['subtask_ids'];
    }
    public withSubtaskId(subtaskId: string): SubTaskCaseQuery {
        this['subtask_id'] = subtaskId;
        return this;
    }
    public set subtaskId(subtaskId: string  | undefined) {
        this['subtask_id'] = subtaskId;
    }
    public get subtaskId(): string | undefined {
        return this['subtask_id'];
    }
    public withSuiteType(suiteType: number): SubTaskCaseQuery {
        this['suiteType'] = suiteType;
        return this;
    }
    public withTaskId(taskId: string): SubTaskCaseQuery {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskIds(taskIds: Array<string>): SubTaskCaseQuery {
        this['task_ids'] = taskIds;
        return this;
    }
    public set taskIds(taskIds: Array<string>  | undefined) {
        this['task_ids'] = taskIds;
    }
    public get taskIds(): Array<string> | undefined {
        return this['task_ids'];
    }
    public withTaskTypeId(taskTypeId: string): SubTaskCaseQuery {
        this['taskTypeId'] = taskTypeId;
        return this;
    }
    public withTestServiceId(testServiceId: string): SubTaskCaseQuery {
        this['test_service_id'] = testServiceId;
        return this;
    }
    public set testServiceId(testServiceId: string  | undefined) {
        this['test_service_id'] = testServiceId;
    }
    public get testServiceId(): string | undefined {
        return this['test_service_id'];
    }
    public withTestcaseId(testcaseId: string): SubTaskCaseQuery {
        this['testcase_id'] = testcaseId;
        return this;
    }
    public set testcaseId(testcaseId: string  | undefined) {
        this['testcase_id'] = testcaseId;
    }
    public get testcaseId(): string | undefined {
        return this['testcase_id'];
    }
}