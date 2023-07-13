
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateInstanceTopicResponse extends SdkResponse {
    public name?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): CreateInstanceTopicResponse {
        this['name'] = name;
        return this;
    }
}