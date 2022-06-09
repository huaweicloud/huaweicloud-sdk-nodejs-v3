

export class ListQuotaDetailsRequest {
    public type?: string;
    public constructor() { 
    }
    public withType(type: string): ListQuotaDetailsRequest {
        this['type'] = type;
        return this;
    }
}