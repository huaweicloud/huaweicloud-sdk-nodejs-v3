import { ProductGroupInfo } from './ProductGroupInfo';


export class DeleteTranscodeProductReq {
    private 'asset_id'?: string;
    private 'delete_type'?: DeleteTranscodeProductReqDeleteTypeEnum | string;
    private 'delete_infos'?: Array<ProductGroupInfo>;
    public constructor() { 
    }
    public withAssetId(assetId: string): DeleteTranscodeProductReq {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withDeleteType(deleteType: DeleteTranscodeProductReqDeleteTypeEnum | string): DeleteTranscodeProductReq {
        this['delete_type'] = deleteType;
        return this;
    }
    public set deleteType(deleteType: DeleteTranscodeProductReqDeleteTypeEnum | string  | undefined) {
        this['delete_type'] = deleteType;
    }
    public get deleteType(): DeleteTranscodeProductReqDeleteTypeEnum | string | undefined {
        return this['delete_type'];
    }
    public withDeleteInfos(deleteInfos: Array<ProductGroupInfo>): DeleteTranscodeProductReq {
        this['delete_infos'] = deleteInfos;
        return this;
    }
    public set deleteInfos(deleteInfos: Array<ProductGroupInfo>  | undefined) {
        this['delete_infos'] = deleteInfos;
    }
    public get deleteInfos(): Array<ProductGroupInfo> | undefined {
        return this['delete_infos'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteTranscodeProductReqDeleteTypeEnum {
    GROUP = 'GROUP',
    PRODUCT = 'PRODUCT'
}
