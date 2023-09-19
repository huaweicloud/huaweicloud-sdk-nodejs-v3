

export class ShowBandwidthPackageRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowBandwidthPackageRequest {
        this['id'] = id;
        return this;
    }
}