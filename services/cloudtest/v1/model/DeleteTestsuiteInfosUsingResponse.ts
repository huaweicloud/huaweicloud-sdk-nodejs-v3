
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteTestsuiteInfosUsingResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): DeleteTestsuiteInfosUsingResponse {
        this['body'] = body;
        return this;
    }
}