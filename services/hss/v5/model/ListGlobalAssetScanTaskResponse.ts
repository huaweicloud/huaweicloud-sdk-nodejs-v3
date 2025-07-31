
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGlobalAssetScanTaskResponse extends SdkResponse {
    public exist?: boolean;
    public constructor() { 
        super();
    }
    public withExist(exist: boolean): ListGlobalAssetScanTaskResponse {
        this['exist'] = exist;
        return this;
    }
}