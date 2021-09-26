
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateFunctionReservedInstancesResponse extends SdkResponse {
    public count?: number;
    public constructor() { 
        super();
    }
    public withCount(count: number): UpdateFunctionReservedInstancesResponse {
        this['count'] = count;
        return this;
    }
}