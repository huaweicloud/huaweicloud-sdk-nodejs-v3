
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAkSkResponse extends SdkResponse {
    public ak?: string;
    public sk?: string;
    public constructor() { 
        super();
    }
    public withAk(ak: string): CreateAkSkResponse {
        this['ak'] = ak;
        return this;
    }
    public withSk(sk: string): CreateAkSkResponse {
        this['sk'] = sk;
        return this;
    }
}