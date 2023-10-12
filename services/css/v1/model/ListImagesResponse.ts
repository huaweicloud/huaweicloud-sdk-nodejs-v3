import { GetTargetImageIdDetail } from './GetTargetImageIdDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImagesResponse extends SdkResponse {
    public needUploadUpgradePlugin?: boolean;
    public imageInfoList?: Array<GetTargetImageIdDetail>;
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
}