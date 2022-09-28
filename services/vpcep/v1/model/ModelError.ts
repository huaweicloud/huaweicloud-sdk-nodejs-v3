

export class ModelError {
    public message?: string;
    public code?: string;
    public constructor() { 
    }
    public withMessage(message: string): ModelError {
        this['message'] = message;
        return this;
    }
    public withCode(code: string): ModelError {
        this['code'] = code;
        return this;
    }
}