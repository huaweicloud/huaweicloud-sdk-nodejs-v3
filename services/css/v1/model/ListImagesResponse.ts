import { GetTargetImageIdDetail } from './GetTargetImageIdDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImagesResponse extends SdkResponse {
    public needUploadUpgradePlugin?: boolean;
    public imageInfoList?: Array<GetTargetImageIdDetail>;
    public totalSize?: number;
    public constructor() { 
        super();
    }
    public withNeedUploadUpgradePlugin(needUploadUpgradePlugin: boolean): ListImagesResponse {
        this['needUploadUpgradePlugin'] = needUploadUpgradePlugin;
        return this;
    }
    public withImageInfoList(imageInfoList: Array<GetTargetImageIdDetail>): ListImagesResponse {
        this['imageInfoList'] = imageInfoList;
        return this;
    }
    public withTotalSize(totalSize: number): ListImagesResponse {
        this['totalSize'] = totalSize;
        return this;
    }
}