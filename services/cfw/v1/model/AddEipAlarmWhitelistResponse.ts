
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddEipAlarmWhitelistResponse extends SdkResponse {
    public data?: object;
    public constructor() { 
        super();
    }
    public withData(data: object): AddEipAlarmWhitelistResponse {
        this['data'] = data;
        return this;
    }
}