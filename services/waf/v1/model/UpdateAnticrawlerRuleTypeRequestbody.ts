

export class UpdateAnticrawlerRuleTypeRequestbody {
    private 'anticrawler_type': string | undefined;
    public constructor(anticrawlerType?: any) { 
        this['anticrawler_type'] = anticrawlerType;
    }
    public withAnticrawlerType(anticrawlerType: string): UpdateAnticrawlerRuleTypeRequestbody {
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