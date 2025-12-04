

export class UpdateAnticrawlerRuleTypeRequestbody {
    private 'anticrawler_type'?: UpdateAnticrawlerRuleTypeRequestbodyAnticrawlerTypeEnum | string;
    public constructor(anticrawlerType?: string) { 
        this['anticrawler_type'] = anticrawlerType;
    }
    public withAnticrawlerType(anticrawlerType: UpdateAnticrawlerRuleTypeRequestbodyAnticrawlerTypeEnum | string): UpdateAnticrawlerRuleTypeRequestbody {
        this['anticrawler_type'] = anticrawlerType;
        return this;
    }
    public set anticrawlerType(anticrawlerType: UpdateAnticrawlerRuleTypeRequestbodyAnticrawlerTypeEnum | string  | undefined) {
        this['anticrawler_type'] = anticrawlerType;
    }
    public get anticrawlerType(): UpdateAnticrawlerRuleTypeRequestbodyAnticrawlerTypeEnum | string | undefined {
        return this['anticrawler_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAnticrawlerRuleTypeRequestbodyAnticrawlerTypeEnum {
    ANTICRAWLER_EXCEPT_URL = 'anticrawler_except_url',
    ANTICRAWLER_SPECIFIC_URL = 'anticrawler_specific_url'
}
