import { AccessPointModel } from './AccessPointModel';


export class ShowAccessPointRequest {
    private 'business_id'?: string;
    private 'x-business-id'?: number;
    public body?: AccessPointModel;
    public constructor(businessId?: string, xBusinessId?: number) { 
        this['business_id'] = businessId;
        this['x-business-id'] = xBusinessId;
    }
    public withBusinessId(businessId: string): ShowAccessPointRequest {
        this['business_id'] = businessId;
        return this;
    }
    public set businessId(businessId: string  | undefined) {
        this['business_id'] = businessId;
    }
    public get businessId(): string | undefined {
        return this['business_id'];
    }
    public withXBusinessId(xBusinessId: number): ShowAccessPointRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
    public withBody(body: AccessPointModel): ShowAccessPointRequest {
        this['body'] = body;
        return this;
    }
}