

export class DeleteResult {
    private 'asset_id'?: string;
    public status?: DeleteResultStatusEnum | string;
    public constructor() { 
    }
    public withAssetId(assetId: string): DeleteResult {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withStatus(status: DeleteResultStatusEnum | string): DeleteResult {
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
