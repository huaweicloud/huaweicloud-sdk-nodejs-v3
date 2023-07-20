

export class ConfirmAssetUploadReq {
    private 'asset_id'?: string;
    public status?: ConfirmAssetUploadReqStatusEnum | string;
    public constructor(assetId?: string, status?: string) { 
        this['asset_id'] = assetId;
        this['status'] = status;
    }
    public withAssetId(assetId: string): ConfirmAssetUploadReq {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withStatus(status: ConfirmAssetUploadReqStatusEnum | string): ConfirmAssetUploadReq {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConfirmAssetUploadReqStatusEnum {
    CREATED = 'CREATED',
    FAILED = 'FAILED',
    CANCELLED = 'CANCELLED'
}
