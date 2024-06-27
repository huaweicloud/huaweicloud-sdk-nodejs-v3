
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteTagResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): DeleteTagResponse {
        this['body'] = body;
        return this;
    }
}