

export class ResourcePriceResponse {
    private 'charge_mode'?: ResourcePriceResponseChargeModeEnum | string;
    private 'sale_price'?: number;
    public discount?: number;
    private 'original_price'?: number;
    private 'period_type'?: ResourcePriceResponsePeriodTypeEnum | string;
    private 'period_count'?: number;
    public constructor() { 
    }
    public withChargeMode(chargeMode: ResourcePriceResponseChargeModeEnum | string): ResourcePriceResponse {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: ResourcePriceResponseChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): ResourcePriceResponseChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withSalePrice(salePrice: number): ResourcePriceResponse {
        this['sale_price'] = salePrice;
        return this;
    }
    public set salePrice(salePrice: number  | undefined) {
        this['sale_price'] = salePrice;
    }
    public get salePrice(): number | undefined {
        return this['sale_price'];
    }
    public withDiscount(discount: number): ResourcePriceResponse {
        this['discount'] = discount;
        return this;
    }
    public withOriginalPrice(originalPrice: number): ResourcePriceResponse {
        this['original_price'] = originalPrice;
        return this;
    }
    public set originalPrice(originalPrice: number  | undefined) {
        this['original_price'] = originalPrice;
    }
    public get originalPrice(): number | undefined {
        return this['original_price'];
    }
    public withPeriodType(periodType: ResourcePriceResponsePeriodTypeEnum | string): ResourcePriceResponse {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: ResourcePriceResponsePeriodTypeEnum | string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): ResourcePriceResponsePeriodTypeEnum | string | undefined {
        return this['period_type'];
    }
    public withPeriodCount(periodCount: number): ResourcePriceResponse {
        this['period_count'] = periodCount;
        return this;
    }
    public set periodCount(periodCount: number  | undefined) {
        this['period_count'] = periodCount;
    }
    public get periodCount(): number | undefined {
        return this['period_count'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResourcePriceResponseChargeModeEnum {
    PRE_PAID = 'PRE_PAID',
    POST_PAID = 'POST_PAID',
    FREE = 'FREE'
}
/**
    * @export
    * @enum {string}
    */
export enum ResourcePriceResponsePeriodTypeEnum {
    HOUR = 'HOUR',
    DAY = 'DAY',
    MONTH = 'MONTH',
    YEAR = 'YEAR',
    BYTE = 'BYTE',
    MB = 'MB',
    GB = 'GB'
}
