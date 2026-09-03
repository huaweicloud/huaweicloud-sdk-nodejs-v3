

export class TestCasePolicy {
    private 'failed_times'?: number;
    public retryTimes?: number;
    public constructor() { 
    }
    public withFailedTimes(failedTimes: number): TestCasePolicy {
        this['failed_times'] = failedTimes;
        return this;
    }
    public set failedTimes(failedTimes: number  | undefined) {
        this['failed_times'] = failedTimes;
    }
    public get failedTimes(): number | undefined {
        return this['failed_times'];
    }
    public withRetryTimes(retryTimes: number): TestCasePolicy {
        this['retryTimes'] = retryTimes;
        return this;
    }
}