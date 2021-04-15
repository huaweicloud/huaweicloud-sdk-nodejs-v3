

export class CreateVpcRouteOption {
    public destination: string;
    public nexthop: string;
    public type: CreateVpcRouteOptionTypeEnum;
    private 'vpc_id': string | undefined;
    public constructor(destination?: any, nexthop?: any, type?: any, vpcId?: any) { 
        this['destination'] = destination;
        this['nexthop'] = nexthop;
        this['type'] = type;
        this['vpc_id'] = vpcId;
    }
    public withDestination(destination: string): CreateVpcRouteOption {
        this['destination'] = destination;
        return this;
    }
    public withNexthop(nexthop: string): CreateVpcRouteOption {
        this['nexthop'] = nexthop;
        return this;
    }
    public withType(type: CreateVpcRouteOptionTypeEnum): CreateVpcRouteOption {
        this['type'] = type;
        return this;
    }
    public withVpcId(vpcId: string): CreateVpcRouteOption {
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
export enum CreateVpcRouteOptionTypeEnum {
    PEERING = 'peering'
}
