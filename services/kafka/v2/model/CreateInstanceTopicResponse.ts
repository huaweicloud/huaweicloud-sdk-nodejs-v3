
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateInstanceTopicResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateInstanceTopicResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateInstanceTopicResponse {
        this['name'] = name;
        return this;
    }
}