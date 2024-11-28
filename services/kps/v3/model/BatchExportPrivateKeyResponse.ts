
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchExportPrivateKeyResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): BatchExportPrivateKeyResponse {
        this['body'] = body;
        return this;
    }
}