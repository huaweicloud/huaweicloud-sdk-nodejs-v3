

export class CommonResponseErrorString {
    public code?: string;
    public reason?: string;
    public constructor() { 
    }
    public withCode(code: string): CommonResponseErrorString {
        this['code'] = code;
        return this;
    }
    public withReason(reason: string): CommonResponseErrorString {
        this['reason'] = reason;
        return this;
    }
}