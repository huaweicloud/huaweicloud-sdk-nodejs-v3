
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateOrDeleteTagsResponse extends SdkResponse {
    public desc?: string;
    public constructor() { 
        super();
    }
    public withDesc(desc: string): BatchCreateOrDeleteTagsResponse {
        this['desc'] = desc;
        return this;
    }
}