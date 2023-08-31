
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateHostClusterResponse extends SdkResponse {
    public id?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateHostClusterResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): CreateHostClusterResponse {
        this['status'] = status;
        return this;
    }
}