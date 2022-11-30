

export class ServerFault {
    public code?: number;
    public created?: string;
    public message?: string;
    public details?: string;
    public constructor() { 
    }
    public withCode(code: number): ServerFault {
        this['code'] = code;
        return this;
    }
    public withCreated(created: string): ServerFault {
        this['created'] = created;
        return this;
    }
    public withMessage(message: string): ServerFault {
        this['message'] = message;
        return this;
    }
    public withDetails(details: string): ServerFault {
        this['details'] = details;
        return this;
    }
}