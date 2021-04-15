

export class NovaListKeypairsRequest {
    public limit?: number;
    public marker?: string;
    private 'OpenStack-API-Version'?: string | undefined;
    public constructor() { 
    }
    public withLimit(limit: number): NovaListKeypairsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): NovaListKeypairsRequest {
        this['marker'] = marker;
        return this;
    }
    public withOpenStackAPIVersion(openStackAPIVersion: string): NovaListKeypairsRequest {
        this['OpenStack-API-Version'] = openStackAPIVersion;
        return this;
    }
    public set openStackAPIVersion(openStackAPIVersion: string | undefined) {
        this['OpenStack-API-Version'] = openStackAPIVersion;
    }
    public get openStackAPIVersion() {
        return this['OpenStack-API-Version'];
    }
}