
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAnticrawlerRuleTypeResponse extends SdkResponse {
    private 'anticrawler_type'?: string | undefined;
    public constructor() { 
        super();
    }
    public withAnticrawlerType(anticrawlerType: string): UpdateAnticrawlerRuleTypeResponse {
        this['anticrawler_type'] = anticrawlerType;
        return this;
    }
    public set anticrawlerType(anticrawlerType: string | undefined) {
        this['anticrawler_type'] = anticrawlerType;
    }
    public get anticrawlerType() {
        return this['anticrawler_type'];
    }
}