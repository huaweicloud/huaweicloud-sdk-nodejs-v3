

export class DeleteInterRegionBandwidthRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteInterRegionBandwidthRequest {
        this['id'] = id;
        return this;
    }
}