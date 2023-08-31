
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteEnvironmentResponse extends SdkResponse {
    public status?: string;
    public id?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): DeleteEnvironmentResponse {
        this['status'] = status;
        return this;
    }
    public withId(id: string): DeleteEnvironmentResponse {
        this['id'] = id;
        return this;
    }
}