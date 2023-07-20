

export class Az2Migrate {
    public code?: string;
    public description?: string;
    public status?: string;
    public constructor(code?: string, description?: string, status?: string) { 
        this['code'] = code;
        this['description'] = description;
        this['status'] = status;
    }
    public withCode(code: string): Az2Migrate {
        this['code'] = code;
        return this;
    }
    public withDescription(description: string): Az2Migrate {
        this['description'] = description;
        return this;
    }
    public withStatus(status: string): Az2Migrate {
        this['status'] = status;
        return this;
    }
}