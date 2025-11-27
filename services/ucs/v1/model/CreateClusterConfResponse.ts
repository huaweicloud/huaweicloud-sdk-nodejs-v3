
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateClusterConfResponse extends SdkResponse {
    public body?: { [key: string]: object; };
    public constructor() { 
        super();
    }
    public withBody(body: { [key: string]: object; }): CreateClusterConfResponse {
        this['body'] = body;
        return this;
    }
}