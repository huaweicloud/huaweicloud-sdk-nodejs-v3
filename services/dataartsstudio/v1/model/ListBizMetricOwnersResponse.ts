
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBizMetricOwnersResponse extends SdkResponse {
    public data?: object;
    public constructor() { 
        super();
    }
    public withData(data: object): ListBizMetricOwnersResponse {
        this['data'] = data;
        return this;
    }
}