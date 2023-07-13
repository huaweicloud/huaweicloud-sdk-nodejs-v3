
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePunishmentRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    private 'block_time'?: number | undefined;
    public category?: string;
    public description?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdatePunishmentRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): UpdatePunishmentRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withBlockTime(blockTime: number): UpdatePunishmentRuleResponse {
        this['block_time'] = blockTime;
        return this;
    }
    public set blockTime(blockTime: number | undefined) {
        this['block_time'] = blockTime;
    }
    public get blockTime() {
        return this['block_time'];
    }
    public withCategory(category: string): UpdatePunishmentRuleResponse {
        this['category'] = category;
        return this;
    }
    public withDescription(description: string): UpdatePunishmentRuleResponse {
        this['description'] = description;
        return this;
    }
}