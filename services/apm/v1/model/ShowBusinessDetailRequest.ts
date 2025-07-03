

export class ShowBusinessDetailRequest {
    private 'business_id'?: number;
    private 'x-business-id'?: number;
    public constructor(businessId?: number, xBusinessId?: number) { 
        this['business_id'] = businessId;
        this['x-business-id'] = xBusinessId;
    }
    public withBusinessId(businessId: number): ShowBusinessDetailRequest {
        this['business_id'] = businessId;
        return this;
    }
    public set businessId(businessId: number  | undefined) {
        this['business_id'] = businessId;
    }
    public get businessId(): number | undefined {
        return this['business_id'];
    }
    public withXBusinessId(xBusinessId: number): ShowBusinessDetailRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
}