

export class CreatePunishmentRuleRequestBody {
    public category: CreatePunishmentRuleRequestBodyCategoryEnum;
    private 'block_time': number | undefined;
    public description?: string;
    public constructor(category?: any, blockTime?: any) { 
        this['category'] = category;
        this['block_time'] = blockTime;
    }
    public withCategory(category: CreatePunishmentRuleRequestBodyCategoryEnum): CreatePunishmentRuleRequestBody {
        this['category'] = category;
        return this;
    }
    public withBlockTime(blockTime: number): CreatePunishmentRuleRequestBody {
        this['block_time'] = blockTime;
        return this;
    }
    public set blockTime(blockTime: number | undefined) {
        this['block_time'] = blockTime;
    }
    public get blockTime() {
        return this['block_time'];
    }
    public withDescription(description: string): CreatePunishmentRuleRequestBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreatePunishmentRuleRequestBodyCategoryEnum {
    LONG_IP_BLOCK = 'long_ip_block',
    LONG_COOKIE_BLOCK = 'long_cookie_block',
    LONG_PARAMS_BLOCK = 'long_params_block',
    SHORT_IP_BLOCK = 'short_ip_block',
    SHORT_COOKIE_BLOCK = 'short_cookie_block',
    SHORT_PARAMS_BLOCK = 'short_params_block'
}
