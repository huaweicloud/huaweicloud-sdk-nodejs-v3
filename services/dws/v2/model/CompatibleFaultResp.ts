

export class CompatibleFaultResp {
    public message?: string;
    public created?: string;
    public details?: string;
    public constructor() { 
    }
    public withMessage(message: string): CompatibleFaultResp {
        this['message'] = message;
        return this;
    }
    public withCreated(created: string): CompatibleFaultResp {
        this['created'] = created;
        return this;
    }
    public withDetails(details: string): CompatibleFaultResp {
        this['details'] = details;
        return this;
    }
}