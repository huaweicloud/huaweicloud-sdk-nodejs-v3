

export class ForceRedirectConfig {
    public status: string;
    public type?: string;
    public constructor(status?: any) { 
        this['status'] = status;
    }
    public withStatus(status: string): ForceRedirectConfig {
        this['status'] = status;
        return this;
    }
    public withType(type: string): ForceRedirectConfig {
        this['type'] = type;
        return this;
    }
}