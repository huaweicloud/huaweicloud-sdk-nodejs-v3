

export class OpErrorInfo {
    public code?: string;
    public message?: string;
    public constructor() { 
    }
    public withCode(code: string): OpErrorInfo {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): OpErrorInfo {
        this['message'] = message;
        return this;
    }
}