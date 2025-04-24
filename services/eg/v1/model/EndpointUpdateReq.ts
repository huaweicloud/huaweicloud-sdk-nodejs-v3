

export class EndpointUpdateReq {
    public description?: string;
    public constructor() { 
    }
    public withDescription(description: string): EndpointUpdateReq {
        this['description'] = description;
        return this;
    }
}