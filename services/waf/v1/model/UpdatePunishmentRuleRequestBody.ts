

export class UpdatePunishmentRuleRequestBody {
    public category?: UpdatePunishmentRuleRequestBodyCategoryEnum | string;
    private 'time_unit'?: UpdatePunishmentRuleRequestBodyTimeUnitEnum | string;
    private 'block_time'?: number;
    public description?: string;
    public constructor(category?: string, blockTime?: number) { 
        this['category'] = category;
        this['block_time'] = blockTime;
    }
    public withCategory(category: UpdatePunishmentRuleRequestBodyCategoryEnum | string): UpdatePunishmentRuleRequestBody {
        this['category'] = category;
        return this;
    }
    public withTimeUnit(timeUnit: UpdatePunishmentRuleRequestBodyTimeUnitEnum | string): UpdatePunishmentRuleRequestBody {
        this['time_unit'] = timeUnit;
        return this;
    }
    public set timeUnit(timeUnit: UpdatePunishmentRuleRequestBodyTimeUnitEnum | string  | undefined) {
        this['time_unit'] = timeUnit;
    }
    public get timeUnit(): UpdatePunishmentRuleRequestBodyTimeUnitEnum | string | undefined {
        return this['time_unit'];
    }
    public withBlockTime(blockTime: number): UpdatePunishmentRuleRequestBody {
        this['block_time'] = blockTime;
        return this;
    }
    public set blockTime(blockTime: number  | undefined) {
        this['block_time'] = blockTime;
    }
    public get blockTime(): number | undefined {
        return this['block_time'];
    }
    public withDescription(description: string): UpdatePunishmentRuleRequestBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdatePunishmentRuleRequestBodyCategoryEnum {
    LONG_IP_BLOCK = 'long_ip_block',
    LONG_COOKIE_BLOCK = 'long_cookie_block',
    LONG_PARAMS_BLOCK = 'long_params_block',
    LONG_HEADER_BLOCK = 'long_header_block',
    SHORT_IP_BLOCK = 'short_ip_block',
    SHORT_COOKIE_BLOCK = 'short_cookie_block',
    SHORT_PARAMS_BLOCK = 'short_params_block',
    SHORT_HEADER_BLOCK = 'short_header_block'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdatePunishmentRuleRequestBodyTimeUnitEnum {
    SECOND = 'SECOND',
    MINUTE = 'MINUTE',
    HOUR = 'HOUR',
    DAY = 'DAY',
    MONTH = 'MONTH'
}
