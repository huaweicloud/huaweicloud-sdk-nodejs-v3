

export class DeleteResult {
    private 'asset_id'?: string | undefined;
    public status?: DeleteResultStatusEnum;
    public constructor() { 
    }
    public withAssetId(assetId: string): DeleteResult {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId() {
        return this['asset_id'];
    }
    public withStatus(status: DeleteResultStatusEnum): DeleteResult {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteResultStatusEnum {
    FAILED = 'FAILED',
    DELETED = 'DELETED',
    UNKNOW = 'UNKNOW'
}
