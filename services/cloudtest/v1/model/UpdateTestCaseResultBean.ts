

export class UpdateTestCaseResultBean {
    private 'testcase_id'?: string;
    private 'execute_id'?: string;
    private 'result_id'?: string;
    private 'end_time'?: number;
    public duration?: number;
    public description?: string;
    public constructor(testcaseId?: string, executeId?: string, resultId?: string, endTime?: number) { 
        this['testcase_id'] = testcaseId;
        this['execute_id'] = executeId;
        this['result_id'] = resultId;
        this['end_time'] = endTime;
    }
    public withTestcaseId(testcaseId: string): UpdateTestCaseResultBean {
        this['testcase_id'] = testcaseId;
        return this;
    }
    public set testcaseId(testcaseId: string  | undefined) {
        this['testcase_id'] = testcaseId;
    }
    public get testcaseId(): string | undefined {
        return this['testcase_id'];
    }
    public withExecuteId(executeId: string): UpdateTestCaseResultBean {
        this['execute_id'] = executeId;
        return this;
    }
    public set executeId(executeId: string  | undefined) {
        this['execute_id'] = executeId;
    }
    public get executeId(): string | undefined {
        return this['execute_id'];
    }
    public withResultId(resultId: string): UpdateTestCaseResultBean {
        this['result_id'] = resultId;
        return this;
    }
    public set resultId(resultId: string  | undefined) {
        this['result_id'] = resultId;
    }
    public get resultId(): string | undefined {
        return this['result_id'];
    }
    public withEndTime(endTime: number): UpdateTestCaseResultBean {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withDuration(duration: number): UpdateTestCaseResultBean {
        this['duration'] = duration;
        return this;
    }
    public withDescription(description: string): UpdateTestCaseResultBean {
        this['description'] = description;
        return this;
    }
}