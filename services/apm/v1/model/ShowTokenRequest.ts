

export class ShowTokenRequest {
    private 'business_id'?: string;
    private 'x-business-id'?: number;
    public constructor(businessId?: string, xBusinessId?: number) { 
        this['business_id'] = businessId;
        this['x-business-id'] = xBusinessId;
    }
    public withBusinessId(businessId: string): ShowTokenRequest {
        this['business_id'] = businessId;
        return this;
    }
    public set businessId(businessId: string  | undefined) {
        this['business_id'] = businessId;
    }
    public get businessId(): string | undefined {
        return this['business_id'];
    }
    public withXBusinessId(xBusinessId: number): ShowTokenRequest {
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