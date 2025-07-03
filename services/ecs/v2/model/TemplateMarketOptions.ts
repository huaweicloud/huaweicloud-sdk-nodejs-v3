import { TemplateSpotOptions } from './TemplateSpotOptions';


export class TemplateMarketOptions {
    private 'market_type'?: TemplateMarketOptionsMarketTypeEnum | string;
    private 'spot_options'?: TemplateSpotOptions;
    public constructor() { 
    }
    public withMarketType(marketType: TemplateMarketOptionsMarketTypeEnum | string): TemplateMarketOptions {
        this['market_type'] = marketType;
        return this;
    }
    public set marketType(marketType: TemplateMarketOptionsMarketTypeEnum | string  | undefined) {
        this['market_type'] = marketType;
    }
    public get marketType(): TemplateMarketOptionsMarketTypeEnum | string | undefined {
        return this['market_type'];
    }
    public withSpotOptions(spotOptions: TemplateSpotOptions): TemplateMarketOptions {
        this['spot_options'] = spotOptions;
        return this;
    }
    public set spotOptions(spotOptions: TemplateSpotOptions  | undefined) {
        this['spot_options'] = spotOptions;
    }
    public get spotOptions(): TemplateSpotOptions | undefined {
        return this['spot_options'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TemplateMarketOptionsMarketTypeEnum {
    SPOT = 'spot',
    POSTPAID = 'postpaid'
}
