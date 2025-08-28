
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAutoOpenQuotaStatusResponse extends SdkResponse {
    public enabled?: boolean;
    public constructor() { 
        super();
    }
    public withEnabled(enabled: boolean): ListAutoOpenQuotaStatusResponse {
        this['enabled'] = enabled;
        return this;
    }
}