import { UploadAsset } from './UploadAsset';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UploadMetaDataByUrlResponse extends SdkResponse {
    private 'upload_assets'?: Array<UploadAsset> | undefined;
    public constructor() { 
        super();
    }
    public withUploadAssets(uploadAssets: Array<UploadAsset>): UploadMetaDataByUrlResponse {
        this['upload_assets'] = uploadAssets;
        return this;
    }
    public set uploadAssets(uploadAssets: Array<UploadAsset> | undefined) {
        this['upload_assets'] = uploadAssets;
    }
    public get uploadAssets() {
        return this['upload_assets'];
    }
}