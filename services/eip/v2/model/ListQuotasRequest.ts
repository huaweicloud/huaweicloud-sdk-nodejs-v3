

export class ListQuotasRequest {
    public type?: string;
    public constructor() { 
    }
    public withType(type: string): ListQuotasRequest {
        this['type'] = type;
        return this;
    }
}