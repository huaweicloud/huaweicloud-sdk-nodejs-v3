import { IpGroup } from './IpGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteWhiteBlackIpRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public name?: string;
    public timestamp?: number;
    public description?: string;
    public status?: number;
    public addr?: string;
    public white?: number;
    private 'time_mode'?: string;
    private 'ip_group'?: IpGroup;
    public constructor() { 
        super();
    }
    public withId(id: string): DeleteWhiteBlackIpRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): DeleteWhiteBlackIpRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withName(name: string): DeleteWhiteBlackIpRuleResponse {
        this['name'] = name;
        return this;
    }
    public withTimestamp(timestamp: number): DeleteWhiteBlackIpRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withDescription(description: string): DeleteWhiteBlackIpRuleResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): DeleteWhiteBlackIpRuleResponse {
        this['status'] = status;
        return this;
    }
    public withAddr(addr: string): DeleteWhiteBlackIpRuleResponse {
        this['addr'] = addr;
        return this;
    }
    public withWhite(white: number): DeleteWhiteBlackIpRuleResponse {
        this['white'] = white;
        return this;
    }
    public withTimeMode(timeMode: string): DeleteWhiteBlackIpRuleResponse {
        this['time_mode'] = timeMode;
        return this;
    }
    public set timeMode(timeMode: string  | undefined) {
        this['time_mode'] = timeMode;
    }
    public get timeMode(): string | undefined {
        return this['time_mode'];
    }
    public withIpGroup(ipGroup: IpGroup): DeleteWhiteBlackIpRuleResponse {
        this['ip_group'] = ipGroup;
        return this;
    }
    public set ipGroup(ipGroup: IpGroup  | undefined) {
        this['ip_group'] = ipGroup;
    }
    public get ipGroup(): IpGroup | undefined {
        return this['ip_group'];
    }
}