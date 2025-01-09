import { BatchResInquiryResult } from './BatchResInquiryResult';
import { CouponUnsubscribeResult } from './CouponUnsubscribeResult';


export class BatchInquiryChangeRsp {
    private 'ret_code'?: string;
    private 'error_txt'?: string;
    public amount?: number;
    private 'coupon_results'?: Array<CouponUnsubscribeResult>;
    private 'discount_amount'?: number;
    private 'original_amount'?: number;
    private 'measure_id'?: number;
    public currency?: string;
    private 'product_rating_result'?: Array<BatchResInquiryResult>;
    private 'extend_params'?: string;
    public constructor() { 
    }
    public withRetCode(retCode: string): BatchInquiryChangeRsp {
        this['ret_code'] = retCode;
        return this;
    }
    public set retCode(retCode: string  | undefined) {
        this['ret_code'] = retCode;
    }
    public get retCode(): string | undefined {
        return this['ret_code'];
    }
    public withErrorTxt(errorTxt: string): BatchInquiryChangeRsp {
        this['error_txt'] = errorTxt;
        return this;
    }
    public set errorTxt(errorTxt: string  | undefined) {
        this['error_txt'] = errorTxt;
    }
    public get errorTxt(): string | undefined {
        return this['error_txt'];
    }
    public withAmount(amount: number): BatchInquiryChangeRsp {
        this['amount'] = amount;
        return this;
    }
    public withCouponResults(couponResults: Array<CouponUnsubscribeResult>): BatchInquiryChangeRsp {
        this['coupon_results'] = couponResults;
        return this;
    }
    public set couponResults(couponResults: Array<CouponUnsubscribeResult>  | undefined) {
        this['coupon_results'] = couponResults;
    }
    public get couponResults(): Array<CouponUnsubscribeResult> | undefined {
        return this['coupon_results'];
    }
    public withDiscountAmount(discountAmount: number): BatchInquiryChangeRsp {
        this['discount_amount'] = discountAmount;
        return this;
    }
    public set discountAmount(discountAmount: number  | undefined) {
        this['discount_amount'] = discountAmount;
    }
    public get discountAmount(): number | undefined {
        return this['discount_amount'];
    }
    public withOriginalAmount(originalAmount: number): BatchInquiryChangeRsp {
        this['original_amount'] = originalAmount;
        return this;
    }
    public set originalAmount(originalAmount: number  | undefined) {
        this['original_amount'] = originalAmount;
    }
    public get originalAmount(): number | undefined {
        return this['original_amount'];
    }
    public withMeasureId(measureId: number): BatchInquiryChangeRsp {
        this['measure_id'] = measureId;
        return this;
    }
    public set measureId(measureId: number  | undefined) {
        this['measure_id'] = measureId;
    }
    public get measureId(): number | undefined {
        return this['measure_id'];
    }
    public withCurrency(currency: string): BatchInquiryChangeRsp {
        this['currency'] = currency;
        return this;
    }
    public withProductRatingResult(productRatingResult: Array<BatchResInquiryResult>): BatchInquiryChangeRsp {
        this['product_rating_result'] = productRatingResult;
        return this;
    }
    public set productRatingResult(productRatingResult: Array<BatchResInquiryResult>  | undefined) {
        this['product_rating_result'] = productRatingResult;
    }
    public get productRatingResult(): Array<BatchResInquiryResult> | undefined {
        return this['product_rating_result'];
    }
    public withExtendParams(extendParams: string): BatchInquiryChangeRsp {
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