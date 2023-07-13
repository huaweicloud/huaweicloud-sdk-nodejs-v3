
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePunishmentRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    private 'block_time'?: number | undefined;
    public category?: string;
    public description?: string;
    public timestamp?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): CreatePunishmentRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): CreatePunishmentRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withBlockTime(blockTime: number): CreatePunishmentRuleResponse {
        this['block_time'] = blockTime;
        return this;
    }
    public set blockTime(blockTime: number | undefined) {
        this['block_time'] = blockTime;
    }
    public get blockTime() {
        return this['block_time'];
    }
    public withCategory(category: string): CreatePunishmentRuleResponse {
        this['category'] = category;
        return this;
    }
    public withDescription(description: string): CreatePunishmentRuleResponse {
        this['description'] = description;
        return this;
    }
    public withTimestamp(timestamp: number): CreatePunishmentRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}