import { ContainerCIDR } from './ContainerCIDR';


export class ContainerNetworkUpdate {
    public cidrs?: Array<ContainerCIDR>;
    public constructor() { 
    }
    public withCidrs(cidrs: Array<ContainerCIDR>): ContainerNetworkUpdate {
        this['cidrs'] = cidrs;
        return this;
    }
}