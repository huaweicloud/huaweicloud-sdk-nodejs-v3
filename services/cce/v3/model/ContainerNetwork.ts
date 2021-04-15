

export class ContainerNetwork {
    public cidr?: string;
    public mode: ContainerNetworkModeEnum;
    public constructor(mode?: any) { 
        this['mode'] = mode;
    }
    public withCidr(cidr: string): ContainerNetwork {
        this['cidr'] = cidr;
        return this;
    }
    public withMode(mode: ContainerNetworkModeEnum): ContainerNetwork {
        this['mode'] = mode;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ContainerNetworkModeEnum {
    OVERLAY_L2 = 'overlay_l2',
    VPC_ROUTER = 'vpc-router',
    UNDERLAY_IPVLAN = 'underlay_ipvlan',
    ENI = 'eni'
}
