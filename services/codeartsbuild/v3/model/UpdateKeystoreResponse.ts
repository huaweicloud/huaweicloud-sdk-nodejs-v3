
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateKeystoreResponse extends SdkResponse {
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: string): UpdateKeystoreResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): UpdateKeystoreResponse {
        this['status'] = status;
        return this;
    }
}