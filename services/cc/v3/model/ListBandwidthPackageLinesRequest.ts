

export class ListBandwidthPackageLinesRequest {
    public level?: string;
    public name?: string;
    public constructor() { 
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