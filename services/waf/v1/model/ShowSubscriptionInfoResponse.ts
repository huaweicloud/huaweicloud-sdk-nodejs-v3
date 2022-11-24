import { Premium } from './Premium';
import { ResourceResponse } from './ResourceResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSubscriptionInfoResponse extends SdkResponse {
    public type?: number;
    public resources?: Array<ResourceResponse>;
    public isNewUser?: boolean;
    public premium?: Premium;
    public constructor() { 
        super();
    }
    public withType(type: number): ShowSubscriptionInfoResponse {
        this['type'] = type;
        return this;
    }
    public withResources(resources: Array<ResourceResponse>): ShowSubscriptionInfoResponse {
        this['resources'] = resources;
        return this;
    }
    public withIsNewUser(isNewUser: boolean): ShowSubscriptionInfoResponse {
        this['isNewUser'] = isNewUser;
        return this;
    }
    public withPremium(premium: Premium): ShowSubscriptionInfoResponse {
        this['premium'] = premium;
        return this;
    }
}