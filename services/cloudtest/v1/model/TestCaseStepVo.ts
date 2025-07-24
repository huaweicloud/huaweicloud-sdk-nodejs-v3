

export class TestCaseStepVo {
    private 'test_step'?: string;
    private 'expect_result'?: string;
    public constructor() { 
    }
    public withTestStep(testStep: string): TestCaseStepVo {
        this['test_step'] = testStep;
        return this;
    }
    public set testStep(testStep: string  | undefined) {
        this['test_step'] = testStep;
    }
    public get testStep(): string | undefined {
        return this['test_step'];
    }
    public withExpectResult(expectResult: string): TestCaseStepVo {
        this['expect_result'] = expectResult;
        return this;
    }
    public set expectResult(expectResult: string  | undefined) {
        this['expect_result'] = expectResult;
    }
    public get expectResult(): string | undefined {
        return this['expect_result'];
    }
}