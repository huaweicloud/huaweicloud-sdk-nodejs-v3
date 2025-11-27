

export class ImportOtherResourceRequestBody {
    public file?: any;
    public type?: ImportOtherResourceRequestBodyTypeEnum | string;
    private 'region_id'?: string;
    public constructor(file?: any, type?: string, regionId?: string) { 
        this['file'] = file;
        this['type'] = type;
        this['region_id'] = regionId;
    }
    public withFile(file: any): ImportOtherResourceRequestBody {
        this['file'] = file;
        return this;
    }
    public withType(type: ImportOtherResourceRequestBodyTypeEnum | string): ImportOtherResourceRequestBody {
        this['type'] = type;
        return this;
    }
    public withRegionId(regionId: string): ImportOtherResourceRequestBody {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImportOtherResourceRequestBodyTypeEnum {
    PM = 'PM',
    VM = 'VM',
    MIDDLEWARE = 'Middleware'
}
