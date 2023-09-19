

export class ShowInterRegionBandwidthRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowInterRegionBandwidthRequest {
        this['id'] = id;
        return this;
    }
}