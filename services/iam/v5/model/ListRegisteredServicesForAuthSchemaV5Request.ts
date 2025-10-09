

export class ListRegisteredServicesForAuthSchemaV5Request {
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListRegisteredServicesForAuthSchemaV5Request {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListRegisteredServicesForAuthSchemaV5Request {
        this['marker'] = marker;
        return this;
    }
}