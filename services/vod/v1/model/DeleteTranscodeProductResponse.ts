import { ProductGroupDelFailInfo } from './ProductGroupDelFailInfo';
import { ProductGroupInfo } from './ProductGroupInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteTranscodeProductResponse extends SdkResponse {
    private 'asset_id'?: string;
    public status?: DeleteTranscodeProductResponseStatusEnum | string;
    private 'deleted_products'?: Array<ProductGroupInfo>;
    private 'failed_products'?: Array<ProductGroupDelFailInfo>;
    public constructor() { 
        super();
    }
    public withAssetId(assetId: string): DeleteTranscodeProductResponse {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withStatus(status: DeleteTranscodeProductResponseStatusEnum | string): DeleteTranscodeProductResponse {
        this['status'] = status;
        return this;
    }
    public withDeletedProducts(deletedProducts: Array<ProductGroupInfo>): DeleteTranscodeProductResponse {
        this['deleted_products'] = deletedProducts;
        return this;
    }
    public set deletedProducts(deletedProducts: Array<ProductGroupInfo>  | undefined) {
        this['deleted_products'] = deletedProducts;
    }
    public get deletedProducts(): Array<ProductGroupInfo> | undefined {
        return this['deleted_products'];
    }
    public withFailedProducts(failedProducts: Array<ProductGroupDelFailInfo>): DeleteTranscodeProductResponse {
        this['failed_products'] = failedProducts;
        return this;
    }
    public set failedProducts(failedProducts: Array<ProductGroupDelFailInfo>  | undefined) {
        this['failed_products'] = failedProducts;
    }
    public get failedProducts(): Array<ProductGroupDelFailInfo> | undefined {
        return this['failed_products'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteTranscodeProductResponseStatusEnum {
    SUCCESS = 'SUCCESS',
    FAIL = 'FAIL',
    PARTIAL_SUCCESS = 'PARTIAL_SUCCESS'
}
