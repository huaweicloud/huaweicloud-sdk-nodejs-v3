
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateHostClusterResponse extends SdkResponse {
    public status?: string;
    public id?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): UpdateHostClusterResponse {
        this['status'] = status;
        return this;
    }
    public withId(id: string): UpdateHostClusterResponse {
        this['id'] = id;
        return this;
    }
}