
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetLongAkskConfigResponse extends SdkResponse {
    public hasUploadedLongAKSK?: boolean;
    public enableLongAKSKInNewCluster?: boolean;
    public constructor() { 
        super();
    }
    public withHasUploadedLongAKSK(hasUploadedLongAKSK: boolean): GetLongAkskConfigResponse {
        this['hasUploadedLongAKSK'] = hasUploadedLongAKSK;
        return this;
    }
    public withEnableLongAKSKInNewCluster(enableLongAKSKInNewCluster: boolean): GetLongAkskConfigResponse {
        this['enableLongAKSKInNewCluster'] = enableLongAKSKInNewCluster;
        return this;
    }
}