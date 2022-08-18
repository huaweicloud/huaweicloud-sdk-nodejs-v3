
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateEventResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateEventResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateEventResponse {
        this['name'] = name;
        return this;
    }
}