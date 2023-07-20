

export class FileAddr {
    public bucket?: string;
    public location?: string;
    private 'object'?: string;
    public constructor(bucket?: string, location?: string, modelObject?: string) { 
        this['bucket'] = bucket;
        this['location'] = location;
        this['object'] = modelObject;
    }
    public withBucket(bucket: string): FileAddr {
        this['bucket'] = bucket;
        return this;
    }
    public withLocation(location: string): FileAddr {
        this['location'] = location;
        return this;
    }
    public withModelObject(modelObject: string): FileAddr {
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