

export class TaskPolicy {
    private 'failed_times'?: number;
    public sameIpFailedTestCaseCount?: number;
    public sameTestCaseFailedIpCount?: string;
    public testCaseFailedCount?: number;
    public testCaseFailedRatio?: number;
    public constructor() { 
    }
    public withFailedTimes(failedTimes: number): TaskPolicy {
        this['failed_times'] = failedTimes;
        return this;
    }
    public set failedTimes(failedTimes: number  | undefined) {
        this['failed_times'] = failedTimes;
    }
    public get failedTimes(): number | undefined {
        return this['failed_times'];
    }
    public withSameIpFailedTestCaseCount(sameIpFailedTestCaseCount: number): TaskPolicy {
        this['sameIpFailedTestCaseCount'] = sameIpFailedTestCaseCount;
        return this;
    }
    public withSameTestCaseFailedIpCount(sameTestCaseFailedIpCount: string): TaskPolicy {
        this['sameTestCaseFailedIpCount'] = sameTestCaseFailedIpCount;
        return this;
    }
    public withTestCaseFailedCount(testCaseFailedCount: number): TaskPolicy {
        this['testCaseFailedCount'] = testCaseFailedCount;
        return this;
    }
    public withTestCaseFailedRatio(testCaseFailedRatio: number): TaskPolicy {
        this['testCaseFailedRatio'] = testCaseFailedRatio;
        return this;
    }
}