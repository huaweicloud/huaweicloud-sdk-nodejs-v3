

export class ListBandwidthPackageLevelsRequest {
    public level?: string;
    public name?: string;
    public constructor() { 
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