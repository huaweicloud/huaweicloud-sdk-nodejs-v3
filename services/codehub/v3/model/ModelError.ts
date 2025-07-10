

export class ModelError {
    public code?: string;
    public message?: string;
    public constructor() { 
    }
    public withCode(code: string): ModelError {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ModelError {
        this['message'] = message;
        return this;
    }
}