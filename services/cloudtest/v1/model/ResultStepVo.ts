

export class ResultStepVo {
    public result?: string;
    private 'test_step'?: string;
    private 'expect_result'?: string;
    private 'actual_result'?: string;
    private 'result_name'?: string;
    public constructor() { 
    }
    public withResult(result: string): ResultStepVo {
        this['result'] = result;
        return this;
    }
    public withTestStep(testStep: string): ResultStepVo {
        this['test_step'] = testStep;
        return this;
    }
    public set testStep(testStep: string  | undefined) {
        this['test_step'] = testStep;
    }
    public get testStep(): string | undefined {
        return this['test_step'];
    }
    public withExpectResult(expectResult: string): ResultStepVo {
        this['expect_result'] = expectResult;
        return this;
    }
    public set expectResult(expectResult: string  | undefined) {
        this['expect_result'] = expectResult;
    }
    public get expectResult(): string | undefined {
        return this['expect_result'];
    }
    public withActualResult(actualResult: string): ResultStepVo {
        this['actual_result'] = actualResult;
        return this;
    }
    public set actualResult(actualResult: string  | undefined) {
        this['actual_result'] = actualResult;
    }
    public get actualResult(): string | undefined {
        return this['actual_result'];
    }
    public withResultName(resultName: string): ResultStepVo {
        this['result_name'] = resultName;
        return this;
    }
    public set resultName(resultName: string  | undefined) {
        this['result_name'] = resultName;
    }
    public get resultName(): string | undefined {
        return this['result_name'];
    }
}