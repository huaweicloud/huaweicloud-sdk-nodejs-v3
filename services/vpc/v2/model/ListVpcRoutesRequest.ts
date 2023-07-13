

export class ListVpcRoutesRequest {
    public limit?: number;
    public marker?: string;
    public id?: string;
    public type?: ListVpcRoutesRequestTypeEnum;
    private 'vpc_id'?: string | undefined;
    public destination?: string;
    private 'tenant_id'?: string | undefined;
    public constructor() { 
    }
    public withLimit(limit: number): ListVpcRoutesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListVpcRoutesRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: string): ListVpcRoutesRequest {
        this['id'] = id;
        return this;
    }
    public withType(type: ListVpcRoutesRequestTypeEnum): ListVpcRoutesRequest {
        this['type'] = type;
        return this;
    }
    public withVpcId(vpcId: string): ListVpcRoutesRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withDestination(destination: string): ListVpcRoutesRequest {
        this['destination'] = destination;
        return this;
    }
    public withTenantId(tenantId: string): ListVpcRoutesRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListVpcRoutesRequestTypeEnum {
    PEERING = 'peering'
}
