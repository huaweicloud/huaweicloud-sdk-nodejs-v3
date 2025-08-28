
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateInstanceNameResponse extends SdkResponse {
    public name?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): UpdateInstanceNameResponse {
        this['name'] = name;
        return this;
    }
}