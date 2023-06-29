
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSpResResponse extends SdkResponse {
    public usedAccountsCount?: number;
    public constructor() { 
        super();
    }
    public withUsedAccountsCount(usedAccountsCount: number): ShowSpResResponse {
        this['usedAccountsCount'] = usedAccountsCount;
        return this;
    }
}