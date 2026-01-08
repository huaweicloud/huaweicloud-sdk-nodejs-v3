

export class ListHostsRspHostPropertiesAvailableInstanceCapacities {
    public flavor?: string;
    public constructor() { 
    }
    public withFlavor(flavor: string): ListHostsRspHostPropertiesAvailableInstanceCapacities {
        this['flavor'] = flavor;
        return this;
    }
}