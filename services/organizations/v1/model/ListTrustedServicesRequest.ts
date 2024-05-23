

export class ListTrustedServicesRequest {
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListTrustedServicesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListTrustedServicesRequest {
        this['marker'] = marker;
        return this;
    }
}