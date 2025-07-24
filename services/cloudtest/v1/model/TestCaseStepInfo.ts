

export class TestCaseStepInfo {
    private 'test_step'?: string;
    private 'expect_result'?: string;
    private 'step_actual'?: string;
    private 'step_result'?: string;
    public constructor() { 
    }
    public withTestStep(testStep: string): TestCaseStepInfo {
        this['test_step'] = testStep;
        return this;
    }
    public set testStep(testStep: string  | undefined) {
        this['test_step'] = testStep;
    }
    public get testStep(): string | undefined {
        return this['test_step'];
    }
    public withExpectResult(expectResult: string): TestCaseStepInfo {
        this['expect_result'] = expectResult;
        return this;
    }
    public set expectResult(expectResult: string  | undefined) {
        this['expect_result'] = expectResult;
    }
    public get expectResult(): string | undefined {
        return this['expect_result'];
    }
    public withStepActual(stepActual: string): TestCaseStepInfo {
        this['step_actual'] = stepActual;
        return this;
    }
    public set stepActual(stepActual: string  | undefined) {
        this['step_actual'] = stepActual;
    }
    public get stepActual(): string | undefined {
        return this['step_actual'];
    }
    public withStepResult(stepResult: string): TestCaseStepInfo {
        this['step_result'] = stepResult;
        return this;
    }
    public set stepResult(stepResult: string  | undefined) {
        this['step_result'] = stepResult;
    }
    public get stepResult(): string | undefined {
        return this['step_result'];
    }
}