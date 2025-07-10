
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class TransferAlarmToIncidentResponse extends SdkResponse {
    public data?: Array<string>;
    public constructor() { 
        super();
    }
    public withData(data: Array<string>): TransferAlarmToIncidentResponse {
        this['data'] = data;
        return this;
    }
}