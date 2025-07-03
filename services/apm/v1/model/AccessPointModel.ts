

export class AccessPointModel {
    public region?: string;
    public constructor(region?: string) { 
        this['region'] = region;
    }
    public withRegion(region: string): AccessPointModel {
        this['region'] = region;
        return this;
    }
}