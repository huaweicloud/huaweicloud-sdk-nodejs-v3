

export class RecordObsFileAddr {
    public bucket?: string;
    public location?: RecordObsFileAddrLocationEnum | string;
    private 'object'?: string;
    public constructor(bucket?: string, location?: string, modelObject?: string) { 
        this['bucket'] = bucket;
        this['location'] = location;
        this['object'] = modelObject;
    }
    public withBucket(bucket: string): RecordObsFileAddr {
        this['bucket'] = bucket;
        return this;
    }
    public withLocation(location: RecordObsFileAddrLocationEnum | string): RecordObsFileAddr {
        this['location'] = location;
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
    CN_NORTH_4 = 'cn-north-4',
    CN_NORTH_5 = 'cn-north-5',
    CN_NORTH_6 = 'cn-north-6'
}
