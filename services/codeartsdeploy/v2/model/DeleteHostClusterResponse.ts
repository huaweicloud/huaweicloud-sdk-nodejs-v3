
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteHostClusterResponse extends SdkResponse {
    public status?: string;
    public id?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): DeleteHostClusterResponse {
        this['status'] = status;
        return this;
    }
    public withId(id: string): DeleteHostClusterResponse {
        this['id'] = id;
        return this;
    }
}