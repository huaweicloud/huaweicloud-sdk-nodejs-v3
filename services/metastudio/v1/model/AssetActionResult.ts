import { ErrorResponse } from './ErrorResponse';


export class AssetActionResult {
    private 'ret_status'?: AssetActionResultRetStatusEnum | string;
    private 'asset_ids'?: Array<string>;
    private 'error_info'?: ErrorResponse;
    public constructor() { 
    }
    public withRetStatus(retStatus: AssetActionResultRetStatusEnum | string): AssetActionResult {
        this['ret_status'] = retStatus;
        return this;
    }
    public set retStatus(retStatus: AssetActionResultRetStatusEnum | string  | undefined) {
        this['ret_status'] = retStatus;
    }
    public get retStatus(): AssetActionResultRetStatusEnum | string | undefined {
        return this['ret_status'];
    }
    public withAssetIds(assetIds: Array<string>): AssetActionResult {
        this['asset_ids'] = assetIds;
        return this;
    }
    public set assetIds(assetIds: Array<string>  | undefined) {
        this['asset_ids'] = assetIds;
    }
    public get assetIds(): Array<string> | undefined {
        return this['asset_ids'];
    }
    public withErrorInfo(errorInfo: ErrorResponse): AssetActionResult {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorResponse  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorResponse | undefined {
        return this['error_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AssetActionResultRetStatusEnum {
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED'
}
