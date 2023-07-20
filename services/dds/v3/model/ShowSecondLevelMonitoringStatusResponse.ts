
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecondLevelMonitoringStatusResponse extends SdkResponse {
    public enabled?: boolean;
    public constructor() { 
        super();
    }
    public withEnabled(enabled: boolean): ShowSecondLevelMonitoringStatusResponse {
        this['enabled'] = enabled;
        return this;
    }
}