
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountGroupRmsResourceRelationsResponse extends SdkResponse {
    public data?: number;
    public constructor() { 
        super();
    }
    public withData(data: number): CountGroupRmsResourceRelationsResponse {
        this['data'] = data;
        return this;
    }
}