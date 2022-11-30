
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResetPasswordFlagResponse extends SdkResponse {
    private 'resetpwd_flag'?: string | undefined;
    public constructor() { 
        super();
    }
    public withResetpwdFlag(resetpwdFlag: string): ShowResetPasswordFlagResponse {
        this['resetpwd_flag'] = resetpwdFlag;
        return this;
    }
    public set resetpwdFlag(resetpwdFlag: string | undefined) {
        this['resetpwd_flag'] = resetpwdFlag;
    }
    public get resetpwdFlag() {
        return this['resetpwd_flag'];
    }
}