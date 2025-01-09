

export class ProductResult {
    public id?: string;
    private 'product_id'?: string;
    public amount?: number;
    private 'discount_amount'?: number;
    private 'original_amount'?: number;
    private 'official_website_amount'?: number;
    private 'official_website_discount_amount'?: number;
    private 'optional_discount_amount'?: number;
    private 'per_amount'?: number;
    private 'per_discount_amount'?: number;
    private 'per_original_amount'?: number;
    private 'per_official_website_amount'?: number;
    private 'per_official_website_discount_amount'?: number;
    private 'per_optional_discount_amount'?: number;
    private 'per_period_type'?: number;
    private 'measure_id'?: number;
    private 'extend_params'?: string;
    public constructor() { 
    }
    public withId(id: string): ProductResult {
        this['id'] = id;
        return this;
    }
    public withProductId(productId: string): ProductResult {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withAmount(amount: number): ProductResult {
        this['amount'] = amount;
        return this;
    }
    public withDiscountAmount(discountAmount: number): ProductResult {
        this['discount_amount'] = discountAmount;
        return this;
    }
    public set discountAmount(discountAmount: number  | undefined) {
        this['discount_amount'] = discountAmount;
    }
    public get discountAmount(): number | undefined {
        return this['discount_amount'];
    }
    public withOriginalAmount(originalAmount: number): ProductResult {
        this['original_amount'] = originalAmount;
        return this;
    }
    public set originalAmount(originalAmount: number  | undefined) {
        this['original_amount'] = originalAmount;
    }
    public get originalAmount(): number | undefined {
        return this['original_amount'];
    }
    public withOfficialWebsiteAmount(officialWebsiteAmount: number): ProductResult {
        this['official_website_amount'] = officialWebsiteAmount;
        return this;
    }
    public set officialWebsiteAmount(officialWebsiteAmount: number  | undefined) {
        this['official_website_amount'] = officialWebsiteAmount;
    }
    public get officialWebsiteAmount(): number | undefined {
        return this['official_website_amount'];
    }
    public withOfficialWebsiteDiscountAmount(officialWebsiteDiscountAmount: number): ProductResult {
        this['official_website_discount_amount'] = officialWebsiteDiscountAmount;
        return this;
    }
    public set officialWebsiteDiscountAmount(officialWebsiteDiscountAmount: number  | undefined) {
        this['official_website_discount_amount'] = officialWebsiteDiscountAmount;
    }
    public get officialWebsiteDiscountAmount(): number | undefined {
        return this['official_website_discount_amount'];
    }
    public withOptionalDiscountAmount(optionalDiscountAmount: number): ProductResult {
        this['optional_discount_amount'] = optionalDiscountAmount;
        return this;
    }
    public set optionalDiscountAmount(optionalDiscountAmount: number  | undefined) {
        this['optional_discount_amount'] = optionalDiscountAmount;
    }
    public get optionalDiscountAmount(): number | undefined {
        return this['optional_discount_amount'];
    }
    public withPerAmount(perAmount: number): ProductResult {
        this['per_amount'] = perAmount;
        return this;
    }
    public set perAmount(perAmount: number  | undefined) {
        this['per_amount'] = perAmount;
    }
    public get perAmount(): number | undefined {
        return this['per_amount'];
    }
    public withPerDiscountAmount(perDiscountAmount: number): ProductResult {
        this['per_discount_amount'] = perDiscountAmount;
        return this;
    }
    public set perDiscountAmount(perDiscountAmount: number  | undefined) {
        this['per_discount_amount'] = perDiscountAmount;
    }
    public get perDiscountAmount(): number | undefined {
        return this['per_discount_amount'];
    }
    public withPerOriginalAmount(perOriginalAmount: number): ProductResult {
        this['per_original_amount'] = perOriginalAmount;
        return this;
    }
    public set perOriginalAmount(perOriginalAmount: number  | undefined) {
        this['per_original_amount'] = perOriginalAmount;
    }
    public get perOriginalAmount(): number | undefined {
        return this['per_original_amount'];
    }
    public withPerOfficialWebsiteAmount(perOfficialWebsiteAmount: number): ProductResult {
        this['per_official_website_amount'] = perOfficialWebsiteAmount;
        return this;
    }
    public set perOfficialWebsiteAmount(perOfficialWebsiteAmount: number  | undefined) {
        this['per_official_website_amount'] = perOfficialWebsiteAmount;
    }
    public get perOfficialWebsiteAmount(): number | undefined {
        return this['per_official_website_amount'];
    }
    public withPerOfficialWebsiteDiscountAmount(perOfficialWebsiteDiscountAmount: number): ProductResult {
        this['per_official_website_discount_amount'] = perOfficialWebsiteDiscountAmount;
        return this;
    }
    public set perOfficialWebsiteDiscountAmount(perOfficialWebsiteDiscountAmount: number  | undefined) {
        this['per_official_website_discount_amount'] = perOfficialWebsiteDiscountAmount;
    }
    public get perOfficialWebsiteDiscountAmount(): number | undefined {
        return this['per_official_website_discount_amount'];
    }
    public withPerOptionalDiscountAmount(perOptionalDiscountAmount: number): ProductResult {
        this['per_optional_discount_amount'] = perOptionalDiscountAmount;
        return this;
    }
    public set perOptionalDiscountAmount(perOptionalDiscountAmount: number  | undefined) {
        this['per_optional_discount_amount'] = perOptionalDiscountAmount;
    }
    public get perOptionalDiscountAmount(): number | undefined {
        return this['per_optional_discount_amount'];
    }
    public withPerPeriodType(perPeriodType: number): ProductResult {
        this['per_period_type'] = perPeriodType;
        return this;
    }
    public set perPeriodType(perPeriodType: number  | undefined) {
        this['per_period_type'] = perPeriodType;
    }
    public get perPeriodType(): number | undefined {
        return this['per_period_type'];
    }
    public withMeasureId(measureId: number): ProductResult {
        this['measure_id'] = measureId;
        return this;
    }
    public set measureId(measureId: number  | undefined) {
        this['measure_id'] = measureId;
    }
    public get measureId(): number | undefined {
        return this['measure_id'];
    }
    public withExtendParams(extendParams: string): ProductResult {
        this['extend_params'] = extendParams;
        return this;
    }
    public set extendParams(extendParams: string  | undefined) {
        this['extend_params'] = extendParams;
    }
    public get extendParams(): string | undefined {
        return this['extend_params'];
    }
}