
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCompoundMetricByIdResponse extends SdkResponse {
    public data?: object;
    public constructor() { 
        super();
    }
    public withData(data: object): ShowCompoundMetricByIdResponse {
        this['data'] = data;
        return this;
    }
}