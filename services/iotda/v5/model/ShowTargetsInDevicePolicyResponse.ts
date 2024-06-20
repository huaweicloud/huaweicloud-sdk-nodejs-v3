import { Page } from './Page';
import { PolicyTargetBase } from './PolicyTargetBase';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTargetsInDevicePolicyResponse extends SdkResponse {
    public targets?: Array<PolicyTargetBase>;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withTargets(targets: Array<PolicyTargetBase>): ShowTargetsInDevicePolicyResponse {
        this['targets'] = targets;
        return this;
    }
    public withPage(page: Page): ShowTargetsInDevicePolicyResponse {
        this['page'] = page;
        return this;
    }
}