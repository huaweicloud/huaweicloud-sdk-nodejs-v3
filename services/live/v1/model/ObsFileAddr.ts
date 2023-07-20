

export class ObsFileAddr {
    public bucket?: string;
    public location?: string;
    private 'object'?: string;
    public constructor(bucket?: string, location?: string, modelObject?: string) { 
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
    public set modelObject(modelObject: string  | undefined) {
        this['object'] = modelObject;
    }
    public get modelObject(): string | undefined {
        return this['object'];
    }
}