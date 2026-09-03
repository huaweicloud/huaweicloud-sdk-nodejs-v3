

export class TaskBasicInfoVo {
    private 'error_reason'?: string;
    public id?: string;
    public name?: string;
    private 'task_state'?: number;
    private 'test_suite_type'?: number;
    public constructor() { 
    }
    public withErrorReason(errorReason: string): TaskBasicInfoVo {
        this['error_reason'] = errorReason;
        return this;
    }
    public set errorReason(errorReason: string  | undefined) {
        this['error_reason'] = errorReason;
    }
    public get errorReason(): string | undefined {
        return this['error_reason'];
    }
    public withId(id: string): TaskBasicInfoVo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): TaskBasicInfoVo {
        this['name'] = name;
        return this;
    }
    public withTaskState(taskState: number): TaskBasicInfoVo {
        this['task_state'] = taskState;
        return this;
    }
    public set taskState(taskState: number  | undefined) {
        this['task_state'] = taskState;
    }
    public get taskState(): number | undefined {
        return this['task_state'];
    }
    public withTestSuiteType(testSuiteType: number): TaskBasicInfoVo {
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