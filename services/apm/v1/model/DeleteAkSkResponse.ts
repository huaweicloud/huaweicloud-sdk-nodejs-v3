
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAkSkResponse extends SdkResponse {
    public ak?: string;
    public sk?: string;
    public constructor() { 
        super();
    }
    public withAk(ak: string): DeleteAkSkResponse {
        this['ak'] = ak;
        return this;
    }
    public withSk(sk: string): DeleteAkSkResponse {
        this['sk'] = sk;
        return this;
    }
}