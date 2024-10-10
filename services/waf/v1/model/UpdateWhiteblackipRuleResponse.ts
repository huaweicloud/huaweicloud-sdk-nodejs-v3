import { IpGroup } from './IpGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateWhiteblackipRuleResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public policyid?: string;
    public addr?: string;
    public description?: string;
    public white?: number;
    private 'time_mode'?: string;
    public start?: number;
    public terminal?: number;
    private 'ip_group'?: IpGroup;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateWhiteblackipRuleResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateWhiteblackipRuleResponse {
        this['name'] = name;
        return this;
    }
    public withPolicyid(policyid: string): UpdateWhiteblackipRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withAddr(addr: string): UpdateWhiteblackipRuleResponse {
        this['addr'] = addr;
        return this;
    }
    public withDescription(description: string): UpdateWhiteblackipRuleResponse {
        this['description'] = description;
        return this;
    }
    public withWhite(white: number): UpdateWhiteblackipRuleResponse {
        this['white'] = white;
        return this;
    }
    public withTimeMode(timeMode: string): UpdateWhiteblackipRuleResponse {
        this['time_mode'] = timeMode;
        return this;
    }
    public set timeMode(timeMode: string  | undefined) {
        this['time_mode'] = timeMode;
    }
    public get timeMode(): string | undefined {
        return this['time_mode'];
    }
    public withStart(start: number): UpdateWhiteblackipRuleResponse {
        this['start'] = start;
        return this;
    }
    public withTerminal(terminal: number): UpdateWhiteblackipRuleResponse {
        this['terminal'] = terminal;
        return this;
    }
    public withIpGroup(ipGroup: IpGroup): UpdateWhiteblackipRuleResponse {
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