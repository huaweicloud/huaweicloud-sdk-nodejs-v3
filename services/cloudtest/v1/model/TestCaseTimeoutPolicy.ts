

export class TestCaseTimeoutPolicy {
    public timeoutTimes?: number;
    public constructor() { 
    }
    public withTimeoutTimes(timeoutTimes: number): TestCaseTimeoutPolicy {
        this['timeoutTimes'] = timeoutTimes;
        return this;
    }
}