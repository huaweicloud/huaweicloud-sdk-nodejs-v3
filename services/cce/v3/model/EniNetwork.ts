

export class EniNetwork {
    public eniSubnetId: string;
    public eniSubnetCIDR: string;
    public constructor(eniSubnetId?: any, eniSubnetCIDR?: any) { 
        this['eniSubnetId'] = eniSubnetId;
        this['eniSubnetCIDR'] = eniSubnetCIDR;
    }
    public withEniSubnetId(eniSubnetId: string): EniNetwork {
        this['eniSubnetId'] = eniSubnetId;
        return this;
    }
    public withEniSubnetCIDR(eniSubnetCIDR: string): EniNetwork {
        this['eniSubnetCIDR'] = eniSubnetCIDR;
        return this;
    }
}