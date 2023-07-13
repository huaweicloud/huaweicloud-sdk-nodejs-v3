import { IpGroup } from './IpGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateWhiteblackipRuleResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public policyid?: string;
    public addr?: string;
    public white?: number;
    private 'ip_group'?: IpGroup | undefined;
    public status?: number;
    public description?: string;
    public timestamp?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateWhiteblackipRuleResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateWhiteblackipRuleResponse {
        this['name'] = name;
        return this;
    }
    public withPolicyid(policyid: string): CreateWhiteblackipRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withAddr(addr: string): CreateWhiteblackipRuleResponse {
        this['addr'] = addr;
        return this;
    }
    public withWhite(white: number): CreateWhiteblackipRuleResponse {
        this['white'] = white;
        return this;
    }
    public withIpGroup(ipGroup: IpGroup): CreateWhiteblackipRuleResponse {
        this['ip_group'] = ipGroup;
        return this;
    }
    public set ipGroup(ipGroup: IpGroup | undefined) {
        this['ip_group'] = ipGroup;
    }
    public get ipGroup() {
        return this['ip_group'];
    }
    public withStatus(status: number): CreateWhiteblackipRuleResponse {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): CreateWhiteblackipRuleResponse {
        this['description'] = description;
        return this;
    }
    public withTimestamp(timestamp: number): CreateWhiteblackipRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}