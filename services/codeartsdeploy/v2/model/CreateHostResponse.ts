
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateHostResponse extends SdkResponse {
    public status?: string;
    public id?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): CreateHostResponse {
        this['status'] = status;
        return this;
    }
    public withId(id: string): CreateHostResponse {
        this['id'] = id;
        return this;
    }
}