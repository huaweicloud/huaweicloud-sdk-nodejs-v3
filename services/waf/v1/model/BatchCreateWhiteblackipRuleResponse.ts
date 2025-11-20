import { IpGroup } from './IpGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateWhiteblackipRuleResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public policyid?: string;
    public addr?: string;
    public white?: number;
    private 'time_mode'?: string;
    public start?: number;
    public terminal?: number;
    private 'ip_group'?: IpGroup;
    public status?: number;
    public description?: string;
    public timestamp?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): BatchCreateWhiteblackipRuleResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BatchCreateWhiteblackipRuleResponse {
        this['name'] = name;
        return this;
    }
    public withPolicyid(policyid: string): BatchCreateWhiteblackipRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withAddr(addr: string): BatchCreateWhiteblackipRuleResponse {
        this['addr'] = addr;
        return this;
    }
    public withWhite(white: number): BatchCreateWhiteblackipRuleResponse {
        this['white'] = white;
        return this;
    }
    public withTimeMode(timeMode: string): BatchCreateWhiteblackipRuleResponse {
        this['time_mode'] = timeMode;
        return this;
    }
    public set timeMode(timeMode: string  | undefined) {
        this['time_mode'] = timeMode;
    }
    public get timeMode(): string | undefined {
        return this['time_mode'];
    }
    public withStart(start: number): BatchCreateWhiteblackipRuleResponse {
        this['start'] = start;
        return this;
    }
    public withTerminal(terminal: number): BatchCreateWhiteblackipRuleResponse {
        this['terminal'] = terminal;
        return this;
    }
    public withIpGroup(ipGroup: IpGroup): BatchCreateWhiteblackipRuleResponse {
        this['ip_group'] = ipGroup;
        return this;
    }
    public set ipGroup(ipGroup: IpGroup  | undefined) {
        this['ip_group'] = ipGroup;
    }
    public get ipGroup(): IpGroup | undefined {
        return this['ip_group'];
    }
    public withStatus(status: number): BatchCreateWhiteblackipRuleResponse {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): BatchCreateWhiteblackipRuleResponse {
        this['description'] = description;
        return this;
    }
    public withTimestamp(timestamp: number): BatchCreateWhiteblackipRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}