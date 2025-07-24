

export class CommonResponseErrorOfobject {
    public code?: string;
    public reason?: string;
    public constructor() { 
    }
    public withCode(code: string): CommonResponseErrorOfobject {
        this['code'] = code;
        return this;
    }
    public withReason(reason: string): CommonResponseErrorOfobject {
        this['reason'] = reason;
        return this;
    }
}