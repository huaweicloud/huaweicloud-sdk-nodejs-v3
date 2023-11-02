
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAggregationLogicTablesResponse extends SdkResponse {
    public data?: object;
    public constructor() { 
        super();
    }
    public withData(data: object): ListAggregationLogicTablesResponse {
        this['data'] = data;
        return this;
    }
}