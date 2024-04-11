
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDesignAggregationLogicTableResponse extends SdkResponse {
    public data?: object;
    public constructor() { 
        super();
    }
    public withData(data: object): DeleteDesignAggregationLogicTableResponse {
        this['data'] = data;
        return this;
    }
}