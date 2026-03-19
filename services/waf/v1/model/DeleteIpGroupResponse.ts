import { RuleInfo } from './RuleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteIpGroupResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public ips?: string;
    private 'ip_remarks'?: { [key: string]: string; };
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
    public withIpRemarks(ipRemarks: { [key: string]: string; }): DeleteIpGroupResponse {
        this['ip_remarks'] = ipRemarks;
        return this;
    }
    public set ipRemarks(ipRemarks: { [key: string]: string; }  | undefined) {
        this['ip_remarks'] = ipRemarks;
    }
    public get ipRemarks(): { [key: string]: string; } | undefined {
        return this['ip_remarks'];
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