

export class ListBandwidthPackageLevelsRequest {
    public limit?: number;
    public marker?: string;
    public level?: string;
    public name?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListBandwidthPackageLevelsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListBandwidthPackageLevelsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLevel(level: string): ListBandwidthPackageLevelsRequest {
        this['level'] = level;
        return this;
    }
    public withName(name: string): ListBandwidthPackageLevelsRequest {
        this['name'] = name;
        return this;
    }
}