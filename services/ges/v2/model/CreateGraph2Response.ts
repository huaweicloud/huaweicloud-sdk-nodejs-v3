
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateGraph2Response extends SdkResponse {
    public id?: string;
    public name?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateGraph2Response {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateGraph2Response {
        this['name'] = name;
        return this;
    }
}