
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetClusterLongAkskConfigResponse extends SdkResponse {
    public hasUploadedLongAKSK?: boolean;
    public enableLongAKSK?: boolean;
    public constructor() { 
        super();
    }
    public withHasUploadedLongAKSK(hasUploadedLongAKSK: boolean): GetClusterLongAkskConfigResponse {
        this['hasUploadedLongAKSK'] = hasUploadedLongAKSK;
        return this;
    }
    public withEnableLongAKSK(enableLongAKSK: boolean): GetClusterLongAkskConfigResponse {
        this['enableLongAKSK'] = enableLongAKSK;
        return this;
    }
}