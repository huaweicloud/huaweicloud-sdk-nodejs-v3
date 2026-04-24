
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowChildNumResponse extends SdkResponse {
    public count?: number;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowChildNumResponse {
        this['count'] = count;
        return this;
    }
}