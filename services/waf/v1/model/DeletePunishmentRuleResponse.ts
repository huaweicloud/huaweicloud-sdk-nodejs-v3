
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeletePunishmentRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    private 'block_time'?: number | undefined;
    public category?: string;
    public description?: string;
    public timestamp?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): DeletePunishmentRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): DeletePunishmentRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withBlockTime(blockTime: number): DeletePunishmentRuleResponse {
        this['block_time'] = blockTime;
        return this;
    }
    public set blockTime(blockTime: number | undefined) {
        this['block_time'] = blockTime;
    }
    public get blockTime() {
        return this['block_time'];
    }
    public withCategory(category: string): DeletePunishmentRuleResponse {
        this['category'] = category;
        return this;
    }
    public withDescription(description: string): DeletePunishmentRuleResponse {
        this['description'] = description;
        return this;
    }
    public withTimestamp(timestamp: number): DeletePunishmentRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}