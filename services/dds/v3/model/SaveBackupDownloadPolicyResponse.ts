
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SaveBackupDownloadPolicyResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): SaveBackupDownloadPolicyResponse {
        this['body'] = body;
        return this;
    }
}