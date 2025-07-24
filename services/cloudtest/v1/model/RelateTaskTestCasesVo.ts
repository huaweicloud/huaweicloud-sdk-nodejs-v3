

export class RelateTaskTestCasesVo {
    private 'test_case_num'?: string;
    private 'test_case_name'?: string;
    private 'test_case_uri'?: string;
    private 'task_uri'?: string;
    private 'task_name'?: string;
    private 'task_num'?: string;
    private 'task_creator'?: string;
    public constructor() { 
    }
    public withTestCaseNum(testCaseNum: string): RelateTaskTestCasesVo {
        this['test_case_num'] = testCaseNum;
        return this;
    }
    public set testCaseNum(testCaseNum: string  | undefined) {
        this['test_case_num'] = testCaseNum;
    }
    public get testCaseNum(): string | undefined {
        return this['test_case_num'];
    }
    public withTestCaseName(testCaseName: string): RelateTaskTestCasesVo {
        this['test_case_name'] = testCaseName;
        return this;
    }
    public set testCaseName(testCaseName: string  | undefined) {
        this['test_case_name'] = testCaseName;
    }
    public get testCaseName(): string | undefined {
        return this['test_case_name'];
    }
    public withTestCaseUri(testCaseUri: string): RelateTaskTestCasesVo {
        this['test_case_uri'] = testCaseUri;
        return this;
    }
    public set testCaseUri(testCaseUri: string  | undefined) {
        this['test_case_uri'] = testCaseUri;
    }
    public get testCaseUri(): string | undefined {
        return this['test_case_uri'];
    }
    public withTaskUri(taskUri: string): RelateTaskTestCasesVo {
        this['task_uri'] = taskUri;
        return this;
    }
    public set taskUri(taskUri: string  | undefined) {
        this['task_uri'] = taskUri;
    }
    public get taskUri(): string | undefined {
        return this['task_uri'];
    }
    public withTaskName(taskName: string): RelateTaskTestCasesVo {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withTaskNum(taskNum: string): RelateTaskTestCasesVo {
        this['task_num'] = taskNum;
        return this;
    }
    public set taskNum(taskNum: string  | undefined) {
        this['task_num'] = taskNum;
    }
    public get taskNum(): string | undefined {
        return this['task_num'];
    }
    public withTaskCreator(taskCreator: string): RelateTaskTestCasesVo {
        this['task_creator'] = taskCreator;
        return this;
    }
    public set taskCreator(taskCreator: string  | undefined) {
        this['task_creator'] = taskCreator;
    }
    public get taskCreator(): string | undefined {
        return this['task_creator'];
    }
}