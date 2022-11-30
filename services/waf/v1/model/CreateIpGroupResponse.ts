import { RuleInfo } from './RuleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateIpGroupResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public ips?: string;
    public size?: number;
    public rules?: Array<RuleInfo>;
    public description?: string;
    public timestamp?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateIpGroupResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateIpGroupResponse {
        this['name'] = name;
        return this;
    }
    public withIps(ips: string): CreateIpGroupResponse {
        this['ips'] = ips;
        return this;
    }
    public withSize(size: number): CreateIpGroupResponse {
        this['size'] = size;
        return this;
    }
    public withRules(rules: Array<RuleInfo>): CreateIpGroupResponse {
        this['rules'] = rules;
        return this;
    }
    public withDescription(description: string): CreateIpGroupResponse {
        this['description'] = description;
        return this;
    }
    public withTimestamp(timestamp: number): CreateIpGroupResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}