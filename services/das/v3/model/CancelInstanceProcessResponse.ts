
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CancelInstanceProcessResponse extends SdkResponse {
    public count?: number;
    public constructor() { 
        super();
    }
    public withCount(count: number): CancelInstanceProcessResponse {
        this['count'] = count;
        return this;
    }
}