

export class TestCaseExecuteBean {
    private 'testcase_id'?: string;
    private 'execute_id'?: string;
    private 'result_id'?: string;
    private 'start_time'?: number;
    public constructor(testcaseId?: string, executeId?: string, resultId?: string, startTime?: number) { 
        this['testcase_id'] = testcaseId;
        this['execute_id'] = executeId;
        this['result_id'] = resultId;
        this['start_time'] = startTime;
    }
    public withTestcaseId(testcaseId: string): TestCaseExecuteBean {
        this['testcase_id'] = testcaseId;
        return this;
    }
    public set testcaseId(testcaseId: string  | undefined) {
        this['testcase_id'] = testcaseId;
    }
    public get testcaseId(): string | undefined {
        return this['testcase_id'];
    }
    public withExecuteId(executeId: string): TestCaseExecuteBean {
        this['execute_id'] = executeId;
        return this;
    }
    public set executeId(executeId: string  | undefined) {
        this['execute_id'] = executeId;
    }
    public get executeId(): string | undefined {
        return this['execute_id'];
    }
    public withResultId(resultId: string): TestCaseExecuteBean {
        this['result_id'] = resultId;
        return this;
    }
    public set resultId(resultId: string  | undefined) {
        this['result_id'] = resultId;
    }
    public get resultId(): string | undefined {
        return this['result_id'];
    }
    public withStartTime(startTime: number): TestCaseExecuteBean {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
}