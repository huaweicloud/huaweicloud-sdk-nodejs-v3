

export class BatchBaselineIpdIssuesParamAttribute {
    public baseline?: string;
    public constructor(baseline?: string) { 
        this['baseline'] = baseline;
    }
    public withBaseline(baseline: string): BatchBaselineIpdIssuesParamAttribute {
        this['baseline'] = baseline;
        return this;
    }
}