import { CouponUnsubscribeResult } from './CouponUnsubscribeResult';


export class BatchResInquiryResult {
    public id?: string;
    private 'product_id'?: string;
    public amount?: number;
    private 'coupon_results'?: Array<CouponUnsubscribeResult>;
    private 'discount_amount'?: number;
    private 'original_amount'?: number;
    private 'measure_id'?: number;
    private 'extend_params'?: string;
    public constructor() { 
    }
    public withId(id: string): BatchResInquiryResult {
        this['id'] = id;
        return this;
    }
    public withProductId(productId: string): BatchResInquiryResult {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withAmount(amount: number): BatchResInquiryResult {
        this['amount'] = amount;
        return this;
    }
    public withCouponResults(couponResults: Array<CouponUnsubscribeResult>): BatchResInquiryResult {
        this['coupon_results'] = couponResults;
        return this;
    }
    public set couponResults(couponResults: Array<CouponUnsubscribeResult>  | undefined) {
        this['coupon_results'] = couponResults;
    }
    public get couponResults(): Array<CouponUnsubscribeResult> | undefined {
        return this['coupon_results'];
    }
    public withDiscountAmount(discountAmount: number): BatchResInquiryResult {
        this['discount_amount'] = discountAmount;
        return this;
    }
    public set discountAmount(discountAmount: number  | undefined) {
        this['discount_amount'] = discountAmount;
    }
    public get discountAmount(): number | undefined {
        return this['discount_amount'];
    }
    public withOriginalAmount(originalAmount: number): BatchResInquiryResult {
        this['original_amount'] = originalAmount;
        return this;
    }
    public set originalAmount(originalAmount: number  | undefined) {
        this['original_amount'] = originalAmount;
    }
    public get originalAmount(): number | undefined {
        return this['original_amount'];
    }
    public withMeasureId(measureId: number): BatchResInquiryResult {
        this['measure_id'] = measureId;
        return this;
    }
    public set measureId(measureId: number  | undefined) {
        this['measure_id'] = measureId;
    }
    public get measureId(): number | undefined {
        return this['measure_id'];
    }
    public withExtendParams(extendParams: string): BatchResInquiryResult {
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