

export class IpAllowList {
    public address?: string;
    public description?: string;
    public constructor(address?: string) { 
        this['address'] = address;
    }
    public withAddress(address: string): IpAllowList {
        this['address'] = address;
        return this;
    }
    public withDescription(description: string): IpAllowList {
        this['description'] = description;
        return this;
    }
}