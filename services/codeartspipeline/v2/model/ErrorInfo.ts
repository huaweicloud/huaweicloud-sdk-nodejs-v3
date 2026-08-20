

export class ErrorInfo {
    public code?: string;
    public message?: string;
    public constructor() { 
    }
    public withCode(code: string): ErrorInfo {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ErrorInfo {
        this['message'] = message;
        return this;
    }
}