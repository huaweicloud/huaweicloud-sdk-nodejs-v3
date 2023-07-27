
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWindowsBaremetalServerPwdResponse extends SdkResponse {
    public password?: string;
    public constructor() { 
        super();
    }
    public withPassword(password: string): ShowWindowsBaremetalServerPwdResponse {
        this['password'] = password;
        return this;
    }
}