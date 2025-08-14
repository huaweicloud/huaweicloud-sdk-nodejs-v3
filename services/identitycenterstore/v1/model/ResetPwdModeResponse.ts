
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResetPwdModeResponse extends SdkResponse {
    public password?: string;
    public constructor() { 
        super();
    }
    public withPassword(password: string): ResetPwdModeResponse {
        this['password'] = password;
        return this;
    }
}