

export class ObsInfo {
    public bucket?: string;
    private 'object'?: string;
    public constructor(bucket?: string, modelObject?: string) { 
        this['bucket'] = bucket;
        this['object'] = modelObject;
    }
    public withBucket(bucket: string): ObsInfo {
        this['bucket'] = bucket;
        return this;
    }
    public withModelObject(modelObject: string): ObsInfo {
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