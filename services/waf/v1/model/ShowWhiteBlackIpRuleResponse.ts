import { IpGroup } from './IpGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWhiteBlackIpRuleResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public policyid?: string;
    public addr?: string;
    public white?: number;
    private 'time_mode'?: string;
    private 'ip_group'?: IpGroup;
    public status?: number;
    public description?: string;
    public timestamp?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowWhiteBlackIpRuleResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowWhiteBlackIpRuleResponse {
        this['name'] = name;
        return this;
    }
    public withPolicyid(policyid: string): ShowWhiteBlackIpRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withAddr(addr: string): ShowWhiteBlackIpRuleResponse {
        this['addr'] = addr;
        return this;
    }
    public withWhite(white: number): ShowWhiteBlackIpRuleResponse {
        this['white'] = white;
        return this;
    }
    public withTimeMode(timeMode: string): ShowWhiteBlackIpRuleResponse {
        this['time_mode'] = timeMode;
        return this;
    }
    public set timeMode(timeMode: string  | undefined) {
        this['time_mode'] = timeMode;
    }
    public get timeMode(): string | undefined {
        return this['time_mode'];
    }
    public withIpGroup(ipGroup: IpGroup): ShowWhiteBlackIpRuleResponse {
        this['ip_group'] = ipGroup;
        return this;
    }
    public set ipGroup(ipGroup: IpGroup  | undefined) {
        this['ip_group'] = ipGroup;
    }
    public get ipGroup(): IpGroup | undefined {
        return this['ip_group'];
    }
    public withStatus(status: number): ShowWhiteBlackIpRuleResponse {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): ShowWhiteBlackIpRuleResponse {
        this['description'] = description;
        return this;
    }
    public withTimestamp(timestamp: number): ShowWhiteBlackIpRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}