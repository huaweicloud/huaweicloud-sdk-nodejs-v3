
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountAsyncHistoryCommandsResponse extends SdkResponse {
    public count?: number;
    public constructor() { 
        super();
    }
    public withCount(count: number): CountAsyncHistoryCommandsResponse {
        this['count'] = count;
        return this;
    }
}