import { ContainerCIDR } from './ContainerCIDR';


export class ContainerNetwork {
    public mode: ContainerNetworkModeEnum;
    public cidr?: string;
    public cidrs?: Array<ContainerCIDR>;
    public constructor(mode?: any) { 
        this['mode'] = mode;
    }
    public withMode(mode: ContainerNetworkModeEnum): ContainerNetwork {
        this['mode'] = mode;
        return this;
    }
    public withCidr(cidr: string): ContainerNetwork {
        this['cidr'] = cidr;
        return this;
    }
    public withCidrs(cidrs: Array<ContainerCIDR>): ContainerNetwork {
        this['cidrs'] = cidrs;
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
    ENI = 'eni'
}
