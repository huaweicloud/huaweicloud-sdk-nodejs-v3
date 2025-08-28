
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteUserResponse extends SdkResponse {
    public name?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): DeleteUserResponse {
        this['name'] = name;
        return this;
    }
}