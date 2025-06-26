
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFeatureGatesResponse extends SdkResponse {
    public enableDomainName?: boolean;
    public enableCombinationRetention?: boolean;
    public constructor() { 
        super();
    }
    public withEnableDomainName(enableDomainName: boolean): ListFeatureGatesResponse {
        this['enableDomainName'] = enableDomainName;
        return this;
    }
    public withEnableCombinationRetention(enableCombinationRetention: boolean): ListFeatureGatesResponse {
        this['enableCombinationRetention'] = enableCombinationRetention;
        return this;
    }
}