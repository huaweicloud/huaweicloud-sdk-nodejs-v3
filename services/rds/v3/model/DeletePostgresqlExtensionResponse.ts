
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeletePostgresqlExtensionResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): DeletePostgresqlExtensionResponse {
        this['body'] = body;
        return this;
    }
}