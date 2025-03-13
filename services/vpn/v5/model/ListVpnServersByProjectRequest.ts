

export class ListVpnServersByProjectRequest {
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListVpnServersByProjectRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListVpnServersByProjectRequest {
        this['marker'] = marker;
        return this;
    }
}