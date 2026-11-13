

export class ListVpcPeeringInfosRequest {
    public id?: Array<string>;
    public limit?: number;
    public marker?: string;
    public name?: Array<string>;
    public status?: ListVpcPeeringInfosRequestStatusEnum | string;
    private 'tenant_id'?: string;
    private 'vpc_id'?: Array<string>;
    public constructor() { 
    }
    public withId(id: Array<string>): ListVpcPeeringInfosRequest {
        this['id'] = id;
        return this;
    }
    public withLimit(limit: number): ListVpcPeeringInfosRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListVpcPeeringInfosRequest {
        this['marker'] = marker;
        return this;
    }
    public withName(name: Array<string>): ListVpcPeeringInfosRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: ListVpcPeeringInfosRequestStatusEnum | string): ListVpcPeeringInfosRequest {
        this['status'] = status;
        return this;
    }
    public withTenantId(tenantId: string): ListVpcPeeringInfosRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withVpcId(vpcId: Array<string>): ListVpcPeeringInfosRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: Array<string>  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): Array<string> | undefined {
        return this['vpc_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListVpcPeeringInfosRequestStatusEnum {
    PENDING_ACCEPTANCE = 'PENDING_ACCEPTANCE',
    REJECTED = 'REJECTED',
    EXPIRED = 'EXPIRED',
    DELETED = 'DELETED',
    ACTIVE = 'ACTIVE'
}
