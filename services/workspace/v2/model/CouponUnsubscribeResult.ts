

export class CouponUnsubscribeResult {
    private 'coupon_id'?: string;
    private 'coupon_type'?: string;
    public amount?: number;
    private 'measure_id'?: number;
    public constructor() { 
    }
    public withCouponId(couponId: string): CouponUnsubscribeResult {
        this['coupon_id'] = couponId;
        return this;
    }
    public set couponId(couponId: string  | undefined) {
        this['coupon_id'] = couponId;
    }
    public get couponId(): string | undefined {
        return this['coupon_id'];
    }
    public withCouponType(couponType: string): CouponUnsubscribeResult {
        this['coupon_type'] = couponType;
        return this;
    }
    public set couponType(couponType: string  | undefined) {
        this['coupon_type'] = couponType;
    }
    public get couponType(): string | undefined {
        return this['coupon_type'];
    }
    public withAmount(amount: number): CouponUnsubscribeResult {
        this['amount'] = amount;
        return this;
    }
    public withMeasureId(measureId: number): CouponUnsubscribeResult {
        this['measure_id'] = measureId;
        return this;
    }
    public set measureId(measureId: number  | undefined) {
        this['measure_id'] = measureId;
    }
    public get measureId(): number | undefined {
        return this['measure_id'];
    }
}