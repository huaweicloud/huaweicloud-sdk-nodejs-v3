import { RuleInfo } from './RuleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteIpGroupResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public ips?: string;
    public size?: number;
    public rules?: Array<RuleInfo>;
    public constructor() { 
        super();
    }
    public withId(id: string): DeleteIpGroupResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DeleteIpGroupResponse {
        this['name'] = name;
        return this;
    }
    public withIps(ips: string): DeleteIpGroupResponse {
        this['ips'] = ips;
        return this;
    }
    public withSize(size: number): DeleteIpGroupResponse {
        this['size'] = size;
        return this;
    }
    public withRules(rules: Array<RuleInfo>): DeleteIpGroupResponse {
        this['rules'] = rules;
        return this;
    }
}