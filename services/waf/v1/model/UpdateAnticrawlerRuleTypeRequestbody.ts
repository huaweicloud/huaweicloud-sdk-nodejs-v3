

export class UpdateAnticrawlerRuleTypeRequestbody {
    private 'anticrawler_type'?: string;
    public constructor(anticrawlerType?: string) { 
        this['anticrawler_type'] = anticrawlerType;
    }
    public withAnticrawlerType(anticrawlerType: string): UpdateAnticrawlerRuleTypeRequestbody {
        this['anticrawler_type'] = anticrawlerType;
        return this;
    }
    public set anticrawlerType(anticrawlerType: string  | undefined) {
        this['anticrawler_type'] = anticrawlerType;
    }
    public get anticrawlerType(): string | undefined {
        return this['anticrawler_type'];
    }
}