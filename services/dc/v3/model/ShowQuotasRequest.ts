

export class ShowQuotasRequest {
    public type?: Array<string>;
    public constructor() { 
    }
    public withType(type: Array<string>): ShowQuotasRequest {
        this['type'] = type;
        return this;
    }
}