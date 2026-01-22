
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteBlackWhiteListsResponse extends SdkResponse {
    public data?: Array<string>;
    public constructor() { 
        super();
    }
    public withData(data: Array<string>): BatchDeleteBlackWhiteListsResponse {
        this['data'] = data;
        return this;
    }
}