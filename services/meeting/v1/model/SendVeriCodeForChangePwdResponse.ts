
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SendVeriCodeForChangePwdResponse extends SdkResponse {
    public expire?: number;
    public bindPhone?: string;
    public bindEmail?: string;
    public constructor() { 
        super();
    }
    public withExpire(expire: number): SendVeriCodeForChangePwdResponse {
        this['expire'] = expire;
        return this;
    }
    public withBindPhone(bindPhone: string): SendVeriCodeForChangePwdResponse {
        this['bindPhone'] = bindPhone;
        return this;
    }
    public withBindEmail(bindEmail: string): SendVeriCodeForChangePwdResponse {
        this['bindEmail'] = bindEmail;
        return this;
    }
}