import { BillingResult } from './BillingResult';
import { ProductResult } from './ProductResult';


export class OfficialWebsiteRatingResult {
    public amount?: number;
    private 'official_website_amount'?: number;
    private 'original_amount'?: number;
    private 'official_website_discount_amount'?: number;
    private 'optional_discount_amount'?: number;
    private 'discount_amount'?: number;
    private 'per_amount'?: number;
    private 'per_discount_amount'?: number;
    private 'per_original_amount'?: number;
    private 'per_period_type'?: number;
    private 'measure_id'?: number;
    private 'product_rating_results'?: Array<ProductResult>;
    public constructor() { 
    }
    public withAmount(amount: number): OfficialWebsiteRatingResult {
        this['amount'] = amount;
        return this;
    }
    public withOfficialWebsiteAmount(officialWebsiteAmount: number): OfficialWebsiteRatingResult {
        this['official_website_amount'] = officialWebsiteAmount;
        return this;
    }
    public set officialWebsiteAmount(officialWebsiteAmount: number  | undefined) {
        this['official_website_amount'] = officialWebsiteAmount;
    }
    public get officialWebsiteAmount(): number | undefined {
        return this['official_website_amount'];
    }
    public withOriginalAmount(originalAmount: number): OfficialWebsiteRatingResult {
        this['original_amount'] = originalAmount;
        return this;
    }
    public set originalAmount(originalAmount: number  | undefined) {
        this['original_amount'] = originalAmount;
    }
    public get originalAmount(): number | undefined {
        return this['original_amount'];
    }
    public withOfficialWebsiteDiscountAmount(officialWebsiteDiscountAmount: number): OfficialWebsiteRatingResult {
        this['official_website_discount_amount'] = officialWebsiteDiscountAmount;
        return this;
    }
    public set officialWebsiteDiscountAmount(officialWebsiteDiscountAmount: number  | undefined) {
        this['official_website_discount_amount'] = officialWebsiteDiscountAmount;
    }
    public get officialWebsiteDiscountAmount(): number | undefined {
        return this['official_website_discount_amount'];
    }
    public withOptionalDiscountAmount(optionalDiscountAmount: number): OfficialWebsiteRatingResult {
        this['optional_discount_amount'] = optionalDiscountAmount;
        return this;
    }
    public set optionalDiscountAmount(optionalDiscountAmount: number  | undefined) {
        this['optional_discount_amount'] = optionalDiscountAmount;
    }
    public get optionalDiscountAmount(): number | undefined {
        return this['optional_discount_amount'];
    }
    public withDiscountAmount(discountAmount: number): OfficialWebsiteRatingResult {
        this['discount_amount'] = discountAmount;
        return this;
    }
    public set discountAmount(discountAmount: number  | undefined) {
        this['discount_amount'] = discountAmount;
    }
    public get discountAmount(): number | undefined {
        return this['discount_amount'];
    }
    public withPerAmount(perAmount: number): OfficialWebsiteRatingResult {
        this['per_amount'] = perAmount;
        return this;
    }
    public set perAmount(perAmount: number  | undefined) {
        this['per_amount'] = perAmount;
    }
    public get perAmount(): number | undefined {
        return this['per_amount'];
    }
    public withPerDiscountAmount(perDiscountAmount: number): OfficialWebsiteRatingResult {
        this['per_discount_amount'] = perDiscountAmount;
        return this;
    }
    public set perDiscountAmount(perDiscountAmount: number  | undefined) {
        this['per_discount_amount'] = perDiscountAmount;
    }
    public get perDiscountAmount(): number | undefined {
        return this['per_discount_amount'];
    }
    public withPerOriginalAmount(perOriginalAmount: number): OfficialWebsiteRatingResult {
        this['per_original_amount'] = perOriginalAmount;
        return this;
    }
    public set perOriginalAmount(perOriginalAmount: number  | undefined) {
        this['per_original_amount'] = perOriginalAmount;
    }
    public get perOriginalAmount(): number | undefined {
        return this['per_original_amount'];
    }
    public withPerPeriodType(perPeriodType: number): OfficialWebsiteRatingResult {
        this['per_period_type'] = perPeriodType;
        return this;
    }
    public set perPeriodType(perPeriodType: number  | undefined) {
        this['per_period_type'] = perPeriodType;
    }
    public get perPeriodType(): number | undefined {
        return this['per_period_type'];
    }
    public withMeasureId(measureId: number): OfficialWebsiteRatingResult {
        this['measure_id'] = measureId;
        return this;
    }
    public set measureId(measureId: number  | undefined) {
        this['measure_id'] = measureId;
    }
    public get measureId(): number | undefined {
        return this['measure_id'];
    }
    public withProductRatingResults(productRatingResults: Array<ProductResult>): OfficialWebsiteRatingResult {
        this['product_rating_results'] = productRatingResults;
        return this;
    }
    public set productRatingResults(productRatingResults: Array<ProductResult>  | undefined) {
        this['product_rating_results'] = productRatingResults;
    }
    public get productRatingResults(): Array<ProductResult> | undefined {
        return this['product_rating_results'];
    }
}