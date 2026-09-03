

export class ModelError {
    public code?: string;
    public details?: Array<object>;
    public reason?: string;
    public url?: string;
    public constructor() { 
    }
    public withCode(code: string): ModelError {
        this['code'] = code;
        return this;
    }
    public withDetails(details: Array<object>): ModelError {
        this['details'] = details;
        return this;
    }
    public withReason(reason: string): ModelError {
        this['reason'] = reason;
        return this;
    }
    public withUrl(url: string): ModelError {
        this['url'] = url;
        return this;
    }
}