

export class ListBandwidthPackageLinesRequest {
    public limit?: number;
    public marker?: string;
    public level?: string;
    public name?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListBandwidthPackageLinesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListBandwidthPackageLinesRequest {
        this['marker'] = marker;
        return this;
    }
    public withLevel(level: string): ListBandwidthPackageLinesRequest {
        this['level'] = level;
        return this;
    }
    public withName(name: string): ListBandwidthPackageLinesRequest {
        this['name'] = name;
        return this;
    }
}