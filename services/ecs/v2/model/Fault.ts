

export class Fault {
    public code?: number;
    public created?: string;
    public message?: string;
    public details?: string;
    public constructor() { 
    }
    public withCode(code: number): Fault {
        this['code'] = code;
        return this;
    }
    public withCreated(created: string): Fault {
        this['created'] = created;
        return this;
    }
    public withMessage(message: string): Fault {
        this['message'] = message;
        return this;
    }
    public withDetails(details: string): Fault {
        this['details'] = details;
        return this;
    }
}