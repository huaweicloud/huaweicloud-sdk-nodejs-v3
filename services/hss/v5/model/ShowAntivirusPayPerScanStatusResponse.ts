
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAntivirusPayPerScanStatusResponse extends SdkResponse {
    public enabled?: boolean;
    public constructor() { 
        super();
    }
    public withEnabled(enabled: boolean): ShowAntivirusPayPerScanStatusResponse {
        this['enabled'] = enabled;
        return this;
    }
}