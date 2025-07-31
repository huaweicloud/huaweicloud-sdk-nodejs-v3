
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateGlobalAssetScanTaskResponse extends SdkResponse {
    public error?: string;
    public constructor() { 
        super();
    }
    public withError(error: string): CreateGlobalAssetScanTaskResponse {
        this['error'] = error;
        return this;
    }
}