

export class CommonResponseErrorOfAPITest {
    public code?: string;
    public reason?: string;
    public constructor() { 
    }
    public withCode(code: string): CommonResponseErrorOfAPITest {
        this['code'] = code;
        return this;
    }
    public withReason(reason: string): CommonResponseErrorOfAPITest {
        this['reason'] = reason;
        return this;
    }
}