

export class CommonResponseErrorObject {
    public code?: string;
    public reason?: string;
    public constructor() { 
    }
    public withCode(code: string): CommonResponseErrorObject {
        this['code'] = code;
        return this;
    }
    public withReason(reason: string): CommonResponseErrorObject {
        this['reason'] = reason;
        return this;
    }
}