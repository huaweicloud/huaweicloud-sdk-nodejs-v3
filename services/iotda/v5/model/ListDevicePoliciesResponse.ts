import { ListDevicePolicyBase } from './ListDevicePolicyBase';
import { Page } from './Page';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDevicePoliciesResponse extends SdkResponse {
    public policies?: Array<ListDevicePolicyBase>;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Array<ListDevicePolicyBase>): ListDevicePoliciesResponse {
        this['policies'] = policies;
        return this;
    }
    public withPage(page: Page): ListDevicePoliciesResponse {
        this['page'] = page;
        return this;
    }
}