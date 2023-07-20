
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBalanceStatusResponse extends SdkResponse {
    public balanced?: boolean;
    public constructor() { 
        super();
    }
    public withBalanced(balanced: boolean): ShowBalanceStatusResponse {
        this['balanced'] = balanced;
        return this;
    }
}