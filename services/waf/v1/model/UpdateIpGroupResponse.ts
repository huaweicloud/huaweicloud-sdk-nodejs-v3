import { RuleInfo } from './RuleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateIpGroupResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public ips?: string;
    private 'ip_remarks'?: { [key: string]: string; };
    public size?: number;
    public rules?: Array<RuleInfo>;
    public description?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateIpGroupResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateIpGroupResponse {
        this['name'] = name;
        return this;
    }
    public withIps(ips: string): UpdateIpGroupResponse {
        this['ips'] = ips;
        return this;
    }
    public withIpRemarks(ipRemarks: { [key: string]: string; }): UpdateIpGroupResponse {
        this['ip_remarks'] = ipRemarks;
        return this;
    }
    public set ipRemarks(ipRemarks: { [key: string]: string; }  | undefined) {
        this['ip_remarks'] = ipRemarks;
    }
    public get ipRemarks(): { [key: string]: string; } | undefined {
        return this['ip_remarks'];
    }
    public withSize(size: number): UpdateIpGroupResponse {
        this['size'] = size;
        return this;
    }
    public withRules(rules: Array<RuleInfo>): UpdateIpGroupResponse {
        this['rules'] = rules;
        return this;
    }
    public withDescription(description: string): UpdateIpGroupResponse {
        this['description'] = description;
        return this;
    }
}