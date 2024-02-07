
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePrivateBucketAccessResponse extends SdkResponse {
    public status?: boolean;
    public constructor() { 
        super();
    }
    public withStatus(status: boolean): UpdatePrivateBucketAccessResponse {
        this['status'] = status;
        return this;
    }
}