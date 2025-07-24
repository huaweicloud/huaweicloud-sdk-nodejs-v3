

export class IssuePassDetailsVo {
    public testing?: number;
    public finished?: number;
    private 'not_tested'?: number;
    public constructor() { 
    }
    public withTesting(testing: number): IssuePassDetailsVo {
        this['testing'] = testing;
        return this;
    }
    public withFinished(finished: number): IssuePassDetailsVo {
        this['finished'] = finished;
        return this;
    }
    public withNotTested(notTested: number): IssuePassDetailsVo {
        this['not_tested'] = notTested;
        return this;
    }
    public set notTested(notTested: number  | undefined) {
        this['not_tested'] = notTested;
    }
    public get notTested(): number | undefined {
        return this['not_tested'];
    }
}