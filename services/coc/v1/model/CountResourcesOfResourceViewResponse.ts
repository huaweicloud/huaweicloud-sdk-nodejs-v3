
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountResourcesOfResourceViewResponse extends SdkResponse {
    public data?: number;
    public constructor() { 
        super();
    }
    public withData(data: number): CountResourcesOfResourceViewResponse {
        this['data'] = data;
        return this;
    }
}