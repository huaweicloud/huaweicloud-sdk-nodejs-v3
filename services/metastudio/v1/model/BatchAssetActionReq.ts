

export class BatchAssetActionReq {
    public action?: BatchAssetActionReqActionEnum | string;
    private 'asset_ids'?: Array<string>;
    public params?: string;
    public constructor(action?: string, assetIds?: Array<string>) { 
        this['action'] = action;
        this['asset_ids'] = assetIds;
    }
    public withAction(action: BatchAssetActionReqActionEnum | string): BatchAssetActionReq {
        this['action'] = action;
        return this;
    }
    public withAssetIds(assetIds: Array<string>): BatchAssetActionReq {
        this['asset_ids'] = assetIds;
        return this;
    }
    public set assetIds(assetIds: Array<string>  | undefined) {
        this['asset_ids'] = assetIds;
    }
    public get assetIds(): Array<string> | undefined {
        return this['asset_ids'];
    }
    public withParams(params: string): BatchAssetActionReq {
        this['params'] = params;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchAssetActionReqActionEnum {
    DELETE = 'DELETE',
    DELETE_FORCE = 'DELETE_FORCE',
    RESTORE = 'RESTORE',
    UNACTIVE = 'UNACTIVE',
    ACTIVE = 'ACTIVE',
    SHARE = 'SHARE',
    UNSHARE = 'UNSHARE'
}
