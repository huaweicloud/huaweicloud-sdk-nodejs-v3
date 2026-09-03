

export class TaskTimeoutPolicy {
    public sameIpTimeoutTestCaseCount?: number;
    public sameTestCaseTimeoutIpCount?: string;
    public testCaseTimeoutCount?: number;
    public testCaseTimeoutRatio?: number;
    public timeoutTimes?: number;
    public constructor() { 
    }
    public withSameIpTimeoutTestCaseCount(sameIpTimeoutTestCaseCount: number): TaskTimeoutPolicy {
        this['sameIpTimeoutTestCaseCount'] = sameIpTimeoutTestCaseCount;
        return this;
    }
    public withSameTestCaseTimeoutIpCount(sameTestCaseTimeoutIpCount: string): TaskTimeoutPolicy {
        this['sameTestCaseTimeoutIpCount'] = sameTestCaseTimeoutIpCount;
        return this;
    }
    public withTestCaseTimeoutCount(testCaseTimeoutCount: number): TaskTimeoutPolicy {
        this['testCaseTimeoutCount'] = testCaseTimeoutCount;
        return this;
    }
    public withTestCaseTimeoutRatio(testCaseTimeoutRatio: number): TaskTimeoutPolicy {
        this['testCaseTimeoutRatio'] = testCaseTimeoutRatio;
        return this;
    }
    public withTimeoutTimes(timeoutTimes: number): TaskTimeoutPolicy {
        this['timeoutTimes'] = timeoutTimes;
        return this;
    }
}