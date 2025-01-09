
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResetRandomPasswordResponse extends SdkResponse {
    public password?: string;
    public constructor() { 
        super();
    }
    public withPassword(password: string): ResetRandomPasswordResponse {
        this['password'] = password;
        return this;
    }
}