

export class FailureResources {
    public id?: string;
    public code?: string;
    public message?: string;
    public constructor() { 
    }
    public withId(id: string): FailureResources {
        this['id'] = id;
        return this;
    }
    public withCode(code: string): FailureResources {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): FailureResources {
        this['message'] = message;
        return this;
    }
}