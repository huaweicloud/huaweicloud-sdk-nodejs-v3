

export class ObsObjInfo {
    public bucket: string;
    public location: string;
    private 'object': string | undefined;
    private 'file_name'?: string | undefined;
    public constructor(bucket?: any, location?: any, modelObject?: any) { 
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
    public set modelObject(modelObject: string | undefined) {
        this['object'] = modelObject;
    }
    public get modelObject() {
        return this['object'];
    }
    public withFileName(fileName: string): ObsObjInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName() {
        return this['file_name'];
    }
}