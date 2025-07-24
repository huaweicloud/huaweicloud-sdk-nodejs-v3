

export class TmssStep {
    public expectResult?: string;
    public testStep?: string;
    public constructor() { 
    }
    public withExpectResult(expectResult: string): TmssStep {
        this['expectResult'] = expectResult;
        return this;
    }
    public withTestStep(testStep: string): TmssStep {
        this['testStep'] = testStep;
        return this;
    }
}