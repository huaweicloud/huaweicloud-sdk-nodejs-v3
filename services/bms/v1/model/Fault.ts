

export class Fault {
    public message?: string;
    public code?: number;
    public details?: string;
    public created?: Date;
    public constructor() { 
    }
    public withMessage(message: string): Fault {
        this['message'] = message;
        return this;
    }
    public withCode(code: number): Fault {
        this['code'] = code;
        return this;
    }
    public withDetails(details: string): Fault {
        this['details'] = details;
        return this;
    }
    public withCreated(created: Date): Fault {
        this['created'] = created;
        return this;
    }
}