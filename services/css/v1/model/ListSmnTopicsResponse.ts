
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSmnTopicsResponse extends SdkResponse {
    public topicsName?: Array<string>;
    public constructor() { 
        super();
    }
    public withTopicsName(topicsName: Array<string>): ListSmnTopicsResponse {
        this['topicsName'] = topicsName;
        return this;
    }
}