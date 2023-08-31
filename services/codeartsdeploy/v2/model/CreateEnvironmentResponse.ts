
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateEnvironmentResponse extends SdkResponse {
    public status?: string;
    public id?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): CreateEnvironmentResponse {
        this['status'] = status;
        return this;
    }
    public withId(id: string): CreateEnvironmentResponse {
        this['id'] = id;
        return this;
    }
}