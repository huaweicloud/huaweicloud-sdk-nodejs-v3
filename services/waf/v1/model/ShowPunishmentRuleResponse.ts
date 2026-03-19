
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPunishmentRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    private 'block_time'?: number;
    private 'time_unit'?: string;
    public category?: string;
    public description?: string;
    public timestamp?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowPunishmentRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): ShowPunishmentRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withBlockTime(blockTime: number): ShowPunishmentRuleResponse {
        this['block_time'] = blockTime;
        return this;
    }
    public set blockTime(blockTime: number  | undefined) {
        this['block_time'] = blockTime;
    }
    public get blockTime(): number | undefined {
        return this['block_time'];
    }
    public withTimeUnit(timeUnit: string): ShowPunishmentRuleResponse {
        this['time_unit'] = timeUnit;
        return this;
    }
    public set timeUnit(timeUnit: string  | undefined) {
        this['time_unit'] = timeUnit;
    }
    public get timeUnit(): string | undefined {
        return this['time_unit'];
    }
    public withCategory(category: string): ShowPunishmentRuleResponse {
        this['category'] = category;
        return this;
    }
    public withDescription(description: string): ShowPunishmentRuleResponse {
        this['description'] = description;
        return this;
    }
    public withTimestamp(timestamp: number): ShowPunishmentRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}