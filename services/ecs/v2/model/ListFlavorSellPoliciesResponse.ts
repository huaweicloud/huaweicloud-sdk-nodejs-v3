import { ListFlavorSellPoliciesResult } from './ListFlavorSellPoliciesResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFlavorSellPoliciesResponse extends SdkResponse {
    public count?: number;
    private 'sell_policies'?: Array<ListFlavorSellPoliciesResult>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListFlavorSellPoliciesResponse {
        this['count'] = count;
        return this;
    }
    public withSellPolicies(sellPolicies: Array<ListFlavorSellPoliciesResult>): ListFlavorSellPoliciesResponse {
        this['sell_policies'] = sellPolicies;
        return this;
    }
    public set sellPolicies(sellPolicies: Array<ListFlavorSellPoliciesResult>  | undefined) {
        this['sell_policies'] = sellPolicies;
    }
    public get sellPolicies(): Array<ListFlavorSellPoliciesResult> | undefined {
        return this['sell_policies'];
    }
}