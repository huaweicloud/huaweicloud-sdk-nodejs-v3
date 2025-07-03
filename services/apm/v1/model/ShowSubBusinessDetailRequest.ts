

export class ShowSubBusinessDetailRequest {
    private 'sub_business_id'?: number;
    private 'x-business-id'?: number;
    public constructor(subBusinessId?: number, xBusinessId?: number) { 
        this['sub_business_id'] = subBusinessId;
        this['x-business-id'] = xBusinessId;
    }
    public withSubBusinessId(subBusinessId: number): ShowSubBusinessDetailRequest {
        this['sub_business_id'] = subBusinessId;
        return this;
    }
    public set subBusinessId(subBusinessId: number  | undefined) {
        this['sub_business_id'] = subBusinessId;
    }
    public get subBusinessId(): number | undefined {
        return this['sub_business_id'];
    }
    public withXBusinessId(xBusinessId: number): ShowSubBusinessDetailRequest {
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