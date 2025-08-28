
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateUserResponse extends SdkResponse {
    public name?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): UpdateUserResponse {
        this['name'] = name;
        return this;
    }
}