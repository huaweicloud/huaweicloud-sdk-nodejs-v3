
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCloudLogAliasResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): ListCloudLogAliasResponse {
        this['body'] = body;
        return this;
    }
}