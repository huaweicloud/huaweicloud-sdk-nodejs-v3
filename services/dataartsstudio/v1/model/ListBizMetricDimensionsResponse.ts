
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBizMetricDimensionsResponse extends SdkResponse {
    public data?: object;
    public constructor() { 
        super();
    }
    public withData(data: object): ListBizMetricDimensionsResponse {
        this['data'] = data;
        return this;
    }
}