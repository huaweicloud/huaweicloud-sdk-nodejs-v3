
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowServerPasswordResponse extends SdkResponse {
    public password?: string;
    public constructor() { 
        super();
    }
    public withPassword(password: string): ShowServerPasswordResponse {
        this['password'] = password;
        return this;
    }
}