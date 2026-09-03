

export class TaskErrorPolicy {
    public sameIpErrorTestCaseCount?: number;
    public sameTestCaseErrorIpCount?: string;
    public testCaseErrorCount?: number;
    public testCaseErrorRatio?: number;
    public constructor() { 
    }
    public withSameIpErrorTestCaseCount(sameIpErrorTestCaseCount: number): TaskErrorPolicy {
        this['sameIpErrorTestCaseCount'] = sameIpErrorTestCaseCount;
        return this;
    }
    public withSameTestCaseErrorIpCount(sameTestCaseErrorIpCount: string): TaskErrorPolicy {
        this['sameTestCaseErrorIpCount'] = sameTestCaseErrorIpCount;
        return this;
    }
    public withTestCaseErrorCount(testCaseErrorCount: number): TaskErrorPolicy {
        this['testCaseErrorCount'] = testCaseErrorCount;
        return this;
    }
    public withTestCaseErrorRatio(testCaseErrorRatio: number): TaskErrorPolicy {
        this['testCaseErrorRatio'] = testCaseErrorRatio;
        return this;
    }
}