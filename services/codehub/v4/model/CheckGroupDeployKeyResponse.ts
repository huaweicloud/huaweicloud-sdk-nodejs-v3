
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckGroupDeployKeyResponse extends SdkResponse {
    public exists?: boolean;
    public constructor() { 
        super();
    }
    public withExists(exists: boolean): CheckGroupDeployKeyResponse {
        this['exists'] = exists;
        return this;
    }
}