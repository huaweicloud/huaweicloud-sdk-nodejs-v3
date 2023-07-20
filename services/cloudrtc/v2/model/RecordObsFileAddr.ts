

export class RecordObsFileAddr {
    public location?: RecordObsFileAddrLocationEnum | string;
    private 'project_id'?: string;
    public bucket?: string;
    private 'object'?: string;
    public constructor(location?: string, projectId?: string, bucket?: string) { 
        this['location'] = location;
        this['project_id'] = projectId;
        this['bucket'] = bucket;
    }
    public withLocation(location: RecordObsFileAddrLocationEnum | string): RecordObsFileAddr {
        this['location'] = location;
        return this;
    }
    public withProjectId(projectId: string): RecordObsFileAddr {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBucket(bucket: string): RecordObsFileAddr {
        this['bucket'] = bucket;
        return this;
    }
    public withModelObject(modelObject: string): RecordObsFileAddr {
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

/**
    * @export
    * @enum {string}
    */
export enum RecordObsFileAddrLocationEnum {
    CN_NORTH_4 = 'cn-north-4'
}
