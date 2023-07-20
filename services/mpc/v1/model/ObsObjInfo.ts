

export class ObsObjInfo {
    public bucket?: string;
    public location?: string;
    private 'object'?: string;
    private 'file_name'?: string;
    public constructor(bucket?: string, location?: string, modelObject?: string) { 
        this['bucket'] = bucket;
        this['location'] = location;
        this['object'] = modelObject;
    }
    public withBucket(bucket: string): ObsObjInfo {
        this['bucket'] = bucket;
        return this;
    }
    public withLocation(location: string): ObsObjInfo {
        this['location'] = location;
        return this;
    }
    public withModelObject(modelObject: string): ObsObjInfo {
        this['object'] = modelObject;
        return this;
    }
    public set modelObject(modelObject: string  | undefined) {
        this['object'] = modelObject;
    }
    public get modelObject(): string | undefined {
        return this['object'];
    }
    public withFileName(fileName: string): ObsObjInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
}