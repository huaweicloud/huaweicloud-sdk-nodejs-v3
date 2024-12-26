
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SwitchAutoProtectStatusResponse extends SdkResponse {
    public data?: string;
    public constructor() { 
        super();
    }
    public withData(data: string): SwitchAutoProtectStatusResponse {
        this['data'] = data;
        return this;
    }
}