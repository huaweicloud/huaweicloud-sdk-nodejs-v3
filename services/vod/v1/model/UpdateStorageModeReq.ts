

export class UpdateStorageModeReq {
    private 'asset_id'?: string;
    private 'storage_mode'?: UpdateStorageModeReqStorageModeEnum | string;
    private 'restore_mode'?: UpdateStorageModeReqRestoreModeEnum | string;
    public days?: number;
    private 'restore_tier'?: UpdateStorageModeReqRestoreTierEnum | string;
    public constructor(assetId?: string, storageMode?: string) { 
        this['asset_id'] = assetId;
        this['storage_mode'] = storageMode;
    }
    public withAssetId(assetId: string): UpdateStorageModeReq {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withStorageMode(storageMode: UpdateStorageModeReqStorageModeEnum | string): UpdateStorageModeReq {
        this['storage_mode'] = storageMode;
        return this;
    }
    public set storageMode(storageMode: UpdateStorageModeReqStorageModeEnum | string  | undefined) {
        this['storage_mode'] = storageMode;
    }
    public get storageMode(): UpdateStorageModeReqStorageModeEnum | string | undefined {
        return this['storage_mode'];
    }
    public withRestoreMode(restoreMode: UpdateStorageModeReqRestoreModeEnum | string): UpdateStorageModeReq {
        this['restore_mode'] = restoreMode;
        return this;
    }
    public set restoreMode(restoreMode: UpdateStorageModeReqRestoreModeEnum | string  | undefined) {
        this['restore_mode'] = restoreMode;
    }
    public get restoreMode(): UpdateStorageModeReqRestoreModeEnum | string | undefined {
        return this['restore_mode'];
    }
    public withDays(days: number): UpdateStorageModeReq {
        this['days'] = days;
        return this;
    }
    public withRestoreTier(restoreTier: UpdateStorageModeReqRestoreTierEnum | string): UpdateStorageModeReq {
        this['restore_tier'] = restoreTier;
        return this;
    }
    public set restoreTier(restoreTier: UpdateStorageModeReqRestoreTierEnum | string  | undefined) {
        this['restore_tier'] = restoreTier;
    }
    public get restoreTier(): UpdateStorageModeReqRestoreTierEnum | string | undefined {
        return this['restore_tier'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateStorageModeReqStorageModeEnum {
    STANDARD = 'STANDARD',
    WARM = 'WARM',
    COLD = 'COLD'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateStorageModeReqRestoreModeEnum {
    TEMP = 'TEMP',
    FOREVER = 'FOREVER'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateStorageModeReqRestoreTierEnum {
    EXPEDITED = 'EXPEDITED',
    STANDARD = 'STANDARD'
}
