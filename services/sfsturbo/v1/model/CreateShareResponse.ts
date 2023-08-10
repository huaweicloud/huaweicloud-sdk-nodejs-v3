
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateShareResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateShareResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateShareResponse {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): CreateShareResponse {
        this['status'] = status;
        return this;
    }
}