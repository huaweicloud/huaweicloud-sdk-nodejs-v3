

export class NovaServerFault {
    public code?: number;
    public created?: string;
    public message?: string;
    public details?: string;
    public constructor() { 
    }
    public withCode(code: number): NovaServerFault {
        this['code'] = code;
        return this;
    }
    public withCreated(created: string): NovaServerFault {
        this['created'] = created;
        return this;
    }
    public withMessage(message: string): NovaServerFault {
        this['message'] = message;
        return this;
    }
    public withDetails(details: string): NovaServerFault {
        this['details'] = details;
        return this;
    }
}