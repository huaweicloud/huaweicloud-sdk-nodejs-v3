

export class ExternalServiceCaseStep {
    private 'expect_result'?: string;
    private 'test_step'?: string;
    public constructor() { 
    }
    public withExpectResult(expectResult: string): ExternalServiceCaseStep {
        this['expect_result'] = expectResult;
        return this;
    }
    public set expectResult(expectResult: string  | undefined) {
        this['expect_result'] = expectResult;
    }
    public get expectResult(): string | undefined {
        return this['expect_result'];
    }
    public withTestStep(testStep: string): ExternalServiceCaseStep {
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