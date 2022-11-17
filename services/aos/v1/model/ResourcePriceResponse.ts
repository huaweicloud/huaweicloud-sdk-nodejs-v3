

export class ResourcePriceResponse {
    private 'charge_mode'?: ResourcePriceResponseChargeModeEnum | undefined;
    private 'sale_price'?: object | undefined;
    public discount?: object;
    private 'original_price'?: object | undefined;
    private 'period_type'?: ResourcePriceResponsePeriodTypeEnum | undefined;
    private 'period_count'?: number | undefined;
    public constructor() { 
    }
    public withChargeMode(chargeMode: ResourcePriceResponseChargeModeEnum): ResourcePriceResponse {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: ResourcePriceResponseChargeModeEnum | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode() {
        return this['charge_mode'];
    }
    public withSalePrice(salePrice: object): ResourcePriceResponse {
        this['sale_price'] = salePrice;
        return this;
    }
    public set salePrice(salePrice: object | undefined) {
        this['sale_price'] = salePrice;
    }
    public get salePrice() {
        return this['sale_price'];
    }
    public withDiscount(discount: object): ResourcePriceResponse {
        this['discount'] = discount;
        return this;
    }
    public withOriginalPrice(originalPrice: object): ResourcePriceResponse {
        this['original_price'] = originalPrice;
        return this;
    }
    public set originalPrice(originalPrice: object | undefined) {
        this['original_price'] = originalPrice;
    }
    public get originalPrice() {
        return this['original_price'];
    }
    public withPeriodType(periodType: ResourcePriceResponsePeriodTypeEnum): ResourcePriceResponse {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: ResourcePriceResponsePeriodTypeEnum | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType() {
        return this['period_type'];
    }
    public withPeriodCount(periodCount: number): ResourcePriceResponse {
        this['period_count'] = periodCount;
        return this;
    }
    public set periodCount(periodCount: number | undefined) {
        this['period_count'] = periodCount;
    }
    public get periodCount() {
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
    WEEK = 'WEEK',
    MONTH = 'MONTH',
    YEAR = 'YEAR',
    BYTE = 'BYTE',
    MB = 'MB',
    GB = 'GB'
}
