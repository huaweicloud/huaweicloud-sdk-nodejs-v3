
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateEnvironmentResponse extends SdkResponse {
    public status?: string;
    public id?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): UpdateEnvironmentResponse {
        this['status'] = status;
        return this;
    }
    public withId(id: string): UpdateEnvironmentResponse {
        this['id'] = id;
        return this;
    }
}