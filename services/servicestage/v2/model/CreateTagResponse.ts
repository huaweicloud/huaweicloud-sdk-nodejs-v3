
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTagResponse extends SdkResponse {
    public name?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): CreateTagResponse {
        this['name'] = name;
        return this;
    }
}