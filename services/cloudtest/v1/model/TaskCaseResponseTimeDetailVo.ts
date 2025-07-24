

export class TaskCaseResponseTimeDetailVo {
    private 'case_id'?: string;
    private 'case_name'?: string;
    private 'end_time'?: number;
    private 'error_reason'?: string;
    private 'response_time'?: number;
    private 'service_id'?: string;
    private 'service_name'?: string;
    private 'start_time'?: number;
    public state?: string;
    private 'sub_task_id'?: string;
    private 'tag_id'?: string;
    private 'tag_name'?: string;
    private 'task_case_id'?: string;
    private 'task_id'?: string;
    private 'task_name'?: string;
    private 'task_type_id'?: string;
    private 'test_suite_type'?: number;
    public constructor() { 
    }
    public withCaseId(caseId: string): TaskCaseResponseTimeDetailVo {
        this['case_id'] = caseId;
        return this;
    }
    public set caseId(caseId: string  | undefined) {
        this['case_id'] = caseId;
    }
    public get caseId(): string | undefined {
        return this['case_id'];
    }
    public withCaseName(caseName: string): TaskCaseResponseTimeDetailVo {
        this['case_name'] = caseName;
        return this;
    }
    public set caseName(caseName: string  | undefined) {
        this['case_name'] = caseName;
    }
    public get caseName(): string | undefined {
        return this['case_name'];
    }
    public withEndTime(endTime: number): TaskCaseResponseTimeDetailVo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withErrorReason(errorReason: string): TaskCaseResponseTimeDetailVo {
        this['error_reason'] = errorReason;
        return this;
    }
    public set errorReason(errorReason: string  | undefined) {
        this['error_reason'] = errorReason;
    }
    public get errorReason(): string | undefined {
        return this['error_reason'];
    }
    public withResponseTime(responseTime: number): TaskCaseResponseTimeDetailVo {
        this['response_time'] = responseTime;
        return this;
    }
    public set responseTime(responseTime: number  | undefined) {
        this['response_time'] = responseTime;
    }
    public get responseTime(): number | undefined {
        return this['response_time'];
    }
    public withServiceId(serviceId: string): TaskCaseResponseTimeDetailVo {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withServiceName(serviceName: string): TaskCaseResponseTimeDetailVo {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withStartTime(startTime: number): TaskCaseResponseTimeDetailVo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withState(state: string): TaskCaseResponseTimeDetailVo {
        this['state'] = state;
        return this;
    }
    public withSubTaskId(subTaskId: string): TaskCaseResponseTimeDetailVo {
        this['sub_task_id'] = subTaskId;
        return this;
    }
    public set subTaskId(subTaskId: string  | undefined) {
        this['sub_task_id'] = subTaskId;
    }
    public get subTaskId(): string | undefined {
        return this['sub_task_id'];
    }
    public withTagId(tagId: string): TaskCaseResponseTimeDetailVo {
        this['tag_id'] = tagId;
        return this;
    }
    public set tagId(tagId: string  | undefined) {
        this['tag_id'] = tagId;
    }
    public get tagId(): string | undefined {
        return this['tag_id'];
    }
    public withTagName(tagName: string): TaskCaseResponseTimeDetailVo {
        this['tag_name'] = tagName;
        return this;
    }
    public set tagName(tagName: string  | undefined) {
        this['tag_name'] = tagName;
    }
    public get tagName(): string | undefined {
        return this['tag_name'];
    }
    public withTaskCaseId(taskCaseId: string): TaskCaseResponseTimeDetailVo {
        this['task_case_id'] = taskCaseId;
        return this;
    }
    public set taskCaseId(taskCaseId: string  | undefined) {
        this['task_case_id'] = taskCaseId;
    }
    public get taskCaseId(): string | undefined {
        return this['task_case_id'];
    }
    public withTaskId(taskId: string): TaskCaseResponseTimeDetailVo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): TaskCaseResponseTimeDetailVo {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withTaskTypeId(taskTypeId: string): TaskCaseResponseTimeDetailVo {
        this['task_type_id'] = taskTypeId;
        return this;
    }
    public set taskTypeId(taskTypeId: string  | undefined) {
        this['task_type_id'] = taskTypeId;
    }
    public get taskTypeId(): string | undefined {
        return this['task_type_id'];
    }
    public withTestSuiteType(testSuiteType: number): TaskCaseResponseTimeDetailVo {
        this['test_suite_type'] = testSuiteType;
        return this;
    }
    public set testSuiteType(testSuiteType: number  | undefined) {
        this['test_suite_type'] = testSuiteType;
    }
    public get testSuiteType(): number | undefined {
        return this['test_suite_type'];
    }
}