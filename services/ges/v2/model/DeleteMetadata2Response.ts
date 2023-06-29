
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteMetadata2Response extends SdkResponse {
    public body?: { [key: string]: string; };
    public constructor() { 
        super();
    }
    public withBody(body: { [key: string]: string; }): DeleteMetadata2Response {
        this['body'] = body;
        return this;
    }
}