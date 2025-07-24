

export class TestCaseStepResultInfo {
    public result?: string;
    private 'actual_result'?: string;
    private 'expect_result'?: string;
    private 'test_step'?: string;
    public constructor() { 
    }
    public withResult(result: string): TestCaseStepResultInfo {
        this['result'] = result;
        return this;
    }
    public withActualResult(actualResult: string): TestCaseStepResultInfo {
        this['actual_result'] = actualResult;
        return this;
    }
    public set actualResult(actualResult: string  | undefined) {
        this['actual_result'] = actualResult;
    }
    public get actualResult(): string | undefined {
        return this['actual_result'];
    }
    public withExpectResult(expectResult: string): TestCaseStepResultInfo {
        this['expect_result'] = expectResult;
        return this;
    }
    public set expectResult(expectResult: string  | undefined) {
        this['expect_result'] = expectResult;
    }
    public get expectResult(): string | undefined {
        return this['expect_result'];
    }
    public withTestStep(testStep: string): TestCaseStepResultInfo {
        this['test_step'] = testStep;
        return this;
    }
    public set testStep(testStep: string  | undefined) {
        this['test_step'] = testStep;
    }
    public get testStep(): string | undefined {
        return this['test_step'];
    }
}