
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPrivacyAgreementsResponse extends SdkResponse {
    public flag?: boolean;
    public constructor() { 
        super();
    }
    public withFlag(flag: boolean): ShowPrivacyAgreementsResponse {
        this['flag'] = flag;
        return this;
    }
}