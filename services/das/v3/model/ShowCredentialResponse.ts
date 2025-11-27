
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCredentialResponse extends SdkResponse {
    public ak?: string;
    public sk?: string;
    public constructor() { 
        super();
    }
    public withAk(ak: string): ShowCredentialResponse {
        this['ak'] = ak;
        return this;
    }
    public withSk(sk: string): ShowCredentialResponse {
        this['sk'] = sk;
        return this;
    }
}