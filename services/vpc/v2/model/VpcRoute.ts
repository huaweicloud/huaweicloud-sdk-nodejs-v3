

export class VpcRoute {
    public id: string;
    public destination: string;
    public nexthop: string;
    public type: VpcRouteTypeEnum;
    private 'vpc_id': string | undefined;
    private 'tenant_id': string | undefined;
    public constructor(id?: any, destination?: any, nexthop?: any, type?: any, vpcId?: any, tenantId?: any) { 
        this['id'] = id;
        this['destination'] = destination;
        this['nexthop'] = nexthop;
        this['type'] = type;
        this['vpc_id'] = vpcId;
        this['tenant_id'] = tenantId;
    }
    public withId(id: string): VpcRoute {
        this['id'] = id;
        return this;
    }
    public withDestination(destination: string): VpcRoute {
        this['destination'] = destination;
        return this;
    }
    public withNexthop(nexthop: string): VpcRoute {
        this['nexthop'] = nexthop;
        return this;
    }
    public withType(type: VpcRouteTypeEnum): VpcRoute {
        this['type'] = type;
        return this;
    }
    public withVpcId(vpcId: string): VpcRoute {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withTenantId(tenantId: string): VpcRoute {
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
export enum VpcRouteTypeEnum {
    PEERING = 'peering'
}
