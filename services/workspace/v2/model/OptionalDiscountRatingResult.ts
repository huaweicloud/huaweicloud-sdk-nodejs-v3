import { BillingResult } from './BillingResult';
import { ProductResult } from './ProductResult';


export class OptionalDiscountRatingResult {
    private 'discount_id'?: string;
    public amount?: number;
    private 'official_website_amount'?: number;
    private 'original_amount'?: number;
    private 'official_website_discount_amount'?: number;
    private 'optional_discount_amount'?: number;
    private 'discount_amount'?: number;
    private 'per_amount'?: number;
    private 'per_discount_amount'?: number;
    private 'per_original_amount'?: number;
    private 'per_official_website_amount'?: number;
    private 'per_official_website_discount_amount'?: number;
    private 'per_optional_discount_amount'?: number;
    private 'per_period_type'?: number;
    private 'measure_id'?: number;
    private 'discount_type'?: number;
    private 'discount_name'?: string;
    private 'best_offer'?: number;
    private 'same_ratio_flag'?: number;
    private 'discount_ratio'?: number;
    private 'promotion_info'?: string;
    private 'product_rating_results'?: Array<ProductResult>;
    public constructor() { 
    }
    public withDiscountId(discountId: string): OptionalDiscountRatingResult {
        this['discount_id'] = discountId;
        return this;
    }
    public set discountId(discountId: string  | undefined) {
        this['discount_id'] = discountId;
    }
    public get discountId(): string | undefined {
        return this['discount_id'];
    }
    public withAmount(amount: number): OptionalDiscountRatingResult {
        this['amount'] = amount;
        return this;
    }
    public withOfficialWebsiteAmount(officialWebsiteAmount: number): OptionalDiscountRatingResult {
        this['official_website_amount'] = officialWebsiteAmount;
        return this;
    }
    public set officialWebsiteAmount(officialWebsiteAmount: number  | undefined) {
        this['official_website_amount'] = officialWebsiteAmount;
    }
    public get officialWebsiteAmount(): number | undefined {
        return this['official_website_amount'];
    }
    public withOriginalAmount(originalAmount: number): OptionalDiscountRatingResult {
        this['original_amount'] = originalAmount;
        return this;
    }
    public set originalAmount(originalAmount: number  | undefined) {
        this['original_amount'] = originalAmount;
    }
    public get originalAmount(): number | undefined {
        return this['original_amount'];
    }
    public withOfficialWebsiteDiscountAmount(officialWebsiteDiscountAmount: number): OptionalDiscountRatingResult {
        this['official_website_discount_amount'] = officialWebsiteDiscountAmount;
        return this;
    }
    public set officialWebsiteDiscountAmount(officialWebsiteDiscountAmount: number  | undefined) {
        this['official_website_discount_amount'] = officialWebsiteDiscountAmount;
    }
    public get officialWebsiteDiscountAmount(): number | undefined {
        return this['official_website_discount_amount'];
    }
    public withOptionalDiscountAmount(optionalDiscountAmount: number): OptionalDiscountRatingResult {
        this['optional_discount_amount'] = optionalDiscountAmount;
        return this;
    }
    public set optionalDiscountAmount(optionalDiscountAmount: number  | undefined) {
        this['optional_discount_amount'] = optionalDiscountAmount;
    }
    public get optionalDiscountAmount(): number | undefined {
        return this['optional_discount_amount'];
    }
    public withDiscountAmount(discountAmount: number): OptionalDiscountRatingResult {
        this['discount_amount'] = discountAmount;
        return this;
    }
    public set discountAmount(discountAmount: number  | undefined) {
        this['discount_amount'] = discountAmount;
    }
    public get discountAmount(): number | undefined {
        return this['discount_amount'];
    }
    public withPerAmount(perAmount: number): OptionalDiscountRatingResult {
        this['per_amount'] = perAmount;
        return this;
    }
    public set perAmount(perAmount: number  | undefined) {
        this['per_amount'] = perAmount;
    }
    public get perAmount(): number | undefined {
        return this['per_amount'];
    }
    public withPerDiscountAmount(perDiscountAmount: number): OptionalDiscountRatingResult {
        this['per_discount_amount'] = perDiscountAmount;
        return this;
    }
    public set perDiscountAmount(perDiscountAmount: number  | undefined) {
        this['per_discount_amount'] = perDiscountAmount;
    }
    public get perDiscountAmount(): number | undefined {
        return this['per_discount_amount'];
    }
    public withPerOriginalAmount(perOriginalAmount: number): OptionalDiscountRatingResult {
        this['per_original_amount'] = perOriginalAmount;
        return this;
    }
    public set perOriginalAmount(perOriginalAmount: number  | undefined) {
        this['per_original_amount'] = perOriginalAmount;
    }
    public get perOriginalAmount(): number | undefined {
        return this['per_original_amount'];
    }
    public withPerOfficialWebsiteAmount(perOfficialWebsiteAmount: number): OptionalDiscountRatingResult {
        this['per_official_website_amount'] = perOfficialWebsiteAmount;
        return this;
    }
    public set perOfficialWebsiteAmount(perOfficialWebsiteAmount: number  | undefined) {
        this['per_official_website_amount'] = perOfficialWebsiteAmount;
    }
    public get perOfficialWebsiteAmount(): number | undefined {
        return this['per_official_website_amount'];
    }
    public withPerOfficialWebsiteDiscountAmount(perOfficialWebsiteDiscountAmount: number): OptionalDiscountRatingResult {
        this['per_official_website_discount_amount'] = perOfficialWebsiteDiscountAmount;
        return this;
    }
    public set perOfficialWebsiteDiscountAmount(perOfficialWebsiteDiscountAmount: number  | undefined) {
        this['per_official_website_discount_amount'] = perOfficialWebsiteDiscountAmount;
    }
    public get perOfficialWebsiteDiscountAmount(): number | undefined {
        return this['per_official_website_discount_amount'];
    }
    public withPerOptionalDiscountAmount(perOptionalDiscountAmount: number): OptionalDiscountRatingResult {
        this['per_optional_discount_amount'] = perOptionalDiscountAmount;
        return this;
    }
    public set perOptionalDiscountAmount(perOptionalDiscountAmount: number  | undefined) {
        this['per_optional_discount_amount'] = perOptionalDiscountAmount;
    }
    public get perOptionalDiscountAmount(): number | undefined {
        return this['per_optional_discount_amount'];
    }
    public withPerPeriodType(perPeriodType: number): OptionalDiscountRatingResult {
        this['per_period_type'] = perPeriodType;
        return this;
    }
    public set perPeriodType(perPeriodType: number  | undefined) {
        this['per_period_type'] = perPeriodType;
    }
    public get perPeriodType(): number | undefined {
        return this['per_period_type'];
    }
    public withMeasureId(measureId: number): OptionalDiscountRatingResult {
        this['measure_id'] = measureId;
        return this;
    }
    public set measureId(measureId: number  | undefined) {
        this['measure_id'] = measureId;
    }
    public get measureId(): number | undefined {
        return this['measure_id'];
    }
    public withDiscountType(discountType: number): OptionalDiscountRatingResult {
        this['discount_type'] = discountType;
        return this;
    }
    public set discountType(discountType: number  | undefined) {
        this['discount_type'] = discountType;
    }
    public get discountType(): number | undefined {
        return this['discount_type'];
    }
    public withDiscountName(discountName: string): OptionalDiscountRatingResult {
        this['discount_name'] = discountName;
        return this;
    }
    public set discountName(discountName: string  | undefined) {
        this['discount_name'] = discountName;
    }
    public get discountName(): string | undefined {
        return this['discount_name'];
    }
    public withBestOffer(bestOffer: number): OptionalDiscountRatingResult {
        this['best_offer'] = bestOffer;
        return this;
    }
    public set bestOffer(bestOffer: number  | undefined) {
        this['best_offer'] = bestOffer;
    }
    public get bestOffer(): number | undefined {
        return this['best_offer'];
    }
    public withSameRatioFlag(sameRatioFlag: number): OptionalDiscountRatingResult {
        this['same_ratio_flag'] = sameRatioFlag;
        return this;
    }
    public set sameRatioFlag(sameRatioFlag: number  | undefined) {
        this['same_ratio_flag'] = sameRatioFlag;
    }
    public get sameRatioFlag(): number | undefined {
        return this['same_ratio_flag'];
    }
    public withDiscountRatio(discountRatio: number): OptionalDiscountRatingResult {
        this['discount_ratio'] = discountRatio;
        return this;
    }
    public set discountRatio(discountRatio: number  | undefined) {
        this['discount_ratio'] = discountRatio;
    }
    public get discountRatio(): number | undefined {
        return this['discount_ratio'];
    }
    public withPromotionInfo(promotionInfo: string): OptionalDiscountRatingResult {
        this['promotion_info'] = promotionInfo;
        return this;
    }
    public set promotionInfo(promotionInfo: string  | undefined) {
        this['promotion_info'] = promotionInfo;
    }
    public get promotionInfo(): string | undefined {
        return this['promotion_info'];
    }
    public withProductRatingResults(productRatingResults: Array<ProductResult>): OptionalDiscountRatingResult {
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