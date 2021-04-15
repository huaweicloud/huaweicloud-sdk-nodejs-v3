

export class EniNetwork {
    public eniSubnetCIDR: string;
    public eniSubnetId: string;
    public constructor(eniSubnetCIDR?: any, eniSubnetId?: any) { 
        this['eniSubnetCIDR'] = eniSubnetCIDR;
        this['eniSubnetId'] = eniSubnetId;
    }
    public withEniSubnetCIDR(eniSubnetCIDR: string): EniNetwork {
        this['eniSubnetCIDR'] = eniSubnetCIDR;
        return this;
    }
    public withEniSubnetId(eniSubnetId: string): EniNetwork {
        this['eniSubnetId'] = eniSubnetId;
        return this;
    }
}