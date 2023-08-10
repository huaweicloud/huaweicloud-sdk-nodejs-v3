
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExpandShareResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ExpandShareResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ExpandShareResponse {
        this['name'] = name;
        return this;
    }
}