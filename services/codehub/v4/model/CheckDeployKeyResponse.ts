
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckDeployKeyResponse extends SdkResponse {
    public exists?: boolean;
    public constructor() { 
        super();
    }
    public withExists(exists: boolean): CheckDeployKeyResponse {
        this['exists'] = exists;
        return this;
    }
}