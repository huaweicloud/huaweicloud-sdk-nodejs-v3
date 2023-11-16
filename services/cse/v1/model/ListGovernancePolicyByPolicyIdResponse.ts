import { GovSelector } from './GovSelector';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGovernancePolicyByPolicyIdResponse extends SdkResponse {
    public name?: string;
    public selector?: GovSelector;
    public spec?: object;
    public constructor() { 
        super();
    }
    public withName(name: string): ListGovernancePolicyByPolicyIdResponse {
        this['name'] = name;
        return this;
    }
    public withSelector(selector: GovSelector): ListGovernancePolicyByPolicyIdResponse {
        this['selector'] = selector;
        return this;
    }
    public withSpec(spec: object): ListGovernancePolicyByPolicyIdResponse {
        this['spec'] = spec;
        return this;
    }
}