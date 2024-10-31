

export class UpdateStorageModeTypeReq {
    private 'storage_mode_type'?: UpdateStorageModeTypeReqStorageModeTypeEnum | string;
    public constructor() { 
    }
    public withStorageModeType(storageModeType: UpdateStorageModeTypeReqStorageModeTypeEnum | string): UpdateStorageModeTypeReq {
        this['storage_mode_type'] = storageModeType;
        return this;
    }
    public set storageModeType(storageModeType: UpdateStorageModeTypeReqStorageModeTypeEnum | string  | undefined) {
        this['storage_mode_type'] = storageModeType;
    }
    public get storageModeType(): UpdateStorageModeTypeReqStorageModeTypeEnum | string | undefined {
        return this['storage_mode_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateStorageModeTypeReqStorageModeTypeEnum {
    WHOLE = 'WHOLE',
    ORIGIN = 'ORIGIN'
}
