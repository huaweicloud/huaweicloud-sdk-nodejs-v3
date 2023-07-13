

export class RecordObsFileAddr {
    public location: RecordObsFileAddrLocationEnum;
    private 'project_id': string | undefined;
    public bucket: string;
    private 'object'?: string | undefined;
    public constructor(location?: any, projectId?: any, bucket?: any) { 
        this['location'] = location;
        this['project_id'] = projectId;
        this['bucket'] = bucket;
    }
    public withLocation(location: RecordObsFileAddrLocationEnum): RecordObsFileAddr {
        this['location'] = location;
        return this;
    }
    public withProjectId(projectId: string): RecordObsFileAddr {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
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
    public set modelObject(modelObject: string | undefined) {
        this['object'] = modelObject;
    }
    public get modelObject() {
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
