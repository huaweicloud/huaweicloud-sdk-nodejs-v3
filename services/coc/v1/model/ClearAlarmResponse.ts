
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ClearAlarmResponse extends SdkResponse {
    public data?: Array<string>;
    public constructor() { 
        super();
    }
    public withData(data: Array<string>): ClearAlarmResponse {
        this['data'] = data;
        return this;
    }
}