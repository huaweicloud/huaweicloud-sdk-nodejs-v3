

export class ServerOperationError {
    public code?: string;
    public message?: string;
    public constructor() { 
    }
    public withCode(code: string): ServerOperationError {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ServerOperationError {
        this['message'] = message;
        return this;
    }
}