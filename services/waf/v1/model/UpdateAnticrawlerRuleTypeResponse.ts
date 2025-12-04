
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAnticrawlerRuleTypeResponse extends SdkResponse {
    private 'anticrawler_type'?: UpdateAnticrawlerRuleTypeResponseAnticrawlerTypeEnum | string;
    public constructor() { 
        super();
    }
    public withAnticrawlerType(anticrawlerType: UpdateAnticrawlerRuleTypeResponseAnticrawlerTypeEnum | string): UpdateAnticrawlerRuleTypeResponse {
        this['anticrawler_type'] = anticrawlerType;
        return this;
    }
    public set anticrawlerType(anticrawlerType: UpdateAnticrawlerRuleTypeResponseAnticrawlerTypeEnum | string  | undefined) {
        this['anticrawler_type'] = anticrawlerType;
    }
    public get anticrawlerType(): UpdateAnticrawlerRuleTypeResponseAnticrawlerTypeEnum | string | undefined {
        return this['anticrawler_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAnticrawlerRuleTypeResponseAnticrawlerTypeEnum {
    ANTICRAWLER_EXCEPT_URL = 'anticrawler_except_url',
    ANTICRAWLER_SPECIFIC_URL = 'anticrawler_specific_url'
}
