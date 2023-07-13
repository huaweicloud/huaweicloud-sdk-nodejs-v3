
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDnsServersResponse extends SdkResponse {
    public data?: Array<string>;
    public constructor() { 
        super();
    }
    public withData(data: Array<string>): UpdateDnsServersResponse {
        this['data'] = data;
        return this;
    }
}