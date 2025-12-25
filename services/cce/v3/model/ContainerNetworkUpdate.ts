import { ContainerCIDR } from './ContainerCIDR';


export class ContainerNetworkUpdate {
    public cidrs?: Array<ContainerCIDR>;
    public containercidrs?: Array<string>;
    public constructor() { 
    }
    public withCidrs(cidrs: Array<ContainerCIDR>): ContainerNetworkUpdate {
        this['cidrs'] = cidrs;
        return this;
    }
    public withContainercidrs(containercidrs: Array<string>): ContainerNetworkUpdate {
        this['containercidrs'] = containercidrs;
        return this;
    }
}