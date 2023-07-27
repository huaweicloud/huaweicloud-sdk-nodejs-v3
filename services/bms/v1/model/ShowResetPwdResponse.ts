
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResetPwdResponse extends SdkResponse {
    private 'resetpwd_flag'?: string;
    public constructor() { 
        super();
    }
    public withResetpwdFlag(resetpwdFlag: string): ShowResetPwdResponse {
        this['resetpwd_flag'] = resetpwdFlag;
        return this;
    }
    public set resetpwdFlag(resetpwdFlag: string  | undefined) {
        this['resetpwd_flag'] = resetpwdFlag;
    }
    public get resetpwdFlag(): string | undefined {
        return this['resetpwd_flag'];
    }
}