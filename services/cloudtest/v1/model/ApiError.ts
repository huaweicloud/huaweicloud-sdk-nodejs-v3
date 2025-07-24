

export class ApiError {
    public code?: string;
    public reason?: string;
    public constructor() { 
    }
    public withCode(code: string): ApiError {
        this['code'] = code;
        return this;
    }
    public withReason(reason: string): ApiError {
        this['reason'] = reason;
        return this;
    }
}