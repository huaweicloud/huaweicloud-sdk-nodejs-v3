

export class ShowQuotasRequest {
    public type?: string;
    public constructor() { 
    }
    public withType(type: string): ShowQuotasRequest {
        this['type'] = type;
        return this;
    }
}