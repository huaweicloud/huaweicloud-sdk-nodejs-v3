import { CompositeHostResponse } from './CompositeHostResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCompositeHostsResponse extends SdkResponse {
    public total?: number;
    private 'cloud_total'?: number;
    private 'premium_total'?: number;
    public items?: Array<CompositeHostResponse>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListCompositeHostsResponse {
        this['total'] = total;
        return this;
    }
    public withCloudTotal(cloudTotal: number): ListCompositeHostsResponse {
        this['cloud_total'] = cloudTotal;
        return this;
    }
    public set cloudTotal(cloudTotal: number  | undefined) {
        this['cloud_total'] = cloudTotal;
    }
    public get cloudTotal(): number | undefined {
        return this['cloud_total'];
    }
    public withPremiumTotal(premiumTotal: number): ListCompositeHostsResponse {
        this['premium_total'] = premiumTotal;
        return this;
    }
    public set premiumTotal(premiumTotal: number  | undefined) {
        this['premium_total'] = premiumTotal;
    }
    public get premiumTotal(): number | undefined {
        return this['premium_total'];
    }
    public withItems(items: Array<CompositeHostResponse>): ListCompositeHostsResponse {
        this['items'] = items;
        return this;
    }
}