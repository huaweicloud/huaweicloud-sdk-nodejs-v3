
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteHostResponse extends SdkResponse {
    public status?: string;
    public id?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): DeleteHostResponse {
        this['status'] = status;
        return this;
    }
    public withId(id: string): DeleteHostResponse {
        this['id'] = id;
        return this;
    }
}