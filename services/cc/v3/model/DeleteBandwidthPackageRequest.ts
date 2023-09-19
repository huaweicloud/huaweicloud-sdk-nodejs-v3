

export class DeleteBandwidthPackageRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteBandwidthPackageRequest {
        this['id'] = id;
        return this;
    }
}