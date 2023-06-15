

export class ObsFileAddr {
    public bucket: string;
    public location: string;
    private 'object': string | undefined;
    public constructor(bucket?: any, location?: any, modelObject?: any) { 
        this['bucket'] = bucket;
        this['location'] = location;
        this['object'] = modelObject;
    }
    public withBucket(bucket: string): ObsFileAddr {
        this['bucket'] = bucket;
        return this;
    }
    public withLocation(location: string): ObsFileAddr {
        this['location'] = location;
        return this;
    }
    public withModelObject(modelObject: string): ObsFileAddr {
        this['object'] = modelObject;
        return this;
    }
    public set modelObject(modelObject: string | undefined) {
        this['object'] = modelObject;
    }
    public get modelObject() {
        return this['object'];
    }
}