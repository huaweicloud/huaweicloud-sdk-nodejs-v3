

export class ListVpcPeeringsRequest {
    public limit?: number;
    public marker?: string;
    public id?: string;
    public name?: string;
    public status?: ListVpcPeeringsRequestStatusEnum;
    private 'tenant_id'?: string | undefined;
    private 'vpc_id'?: string | undefined;
    public constructor() { 
    }
    public withLimit(limit: number): ListVpcPeeringsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListVpcPeeringsRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: string): ListVpcPeeringsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListVpcPeeringsRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: ListVpcPeeringsRequestStatusEnum): ListVpcPeeringsRequest {
        this['status'] = status;
        return this;
    }
    public withTenantId(tenantId: string): ListVpcPeeringsRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withVpcId(vpcId: string): ListVpcPeeringsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListVpcPeeringsRequestStatusEnum {
    PENDING_ACCEPTANCE = 'PENDING_ACCEPTANCE',
    REJECTED = 'REJECTED',
    EXPIRED = 'EXPIRED',
    DELETED = 'DELETED',
    ACTIVE = 'ACTIVE'
}
