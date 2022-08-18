
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateEventResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateEventResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateEventResponse {
        this['name'] = name;
        return this;
    }
}