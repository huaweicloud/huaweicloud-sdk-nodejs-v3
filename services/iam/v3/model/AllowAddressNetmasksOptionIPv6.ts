

export class AllowAddressNetmasksOptionIPv6 {
    private 'address_netmask'?: string;
    public description?: string;
    public constructor(addressNetmask?: string) { 
        this['address_netmask'] = addressNetmask;
    }
    public withAddressNetmask(addressNetmask: string): AllowAddressNetmasksOptionIPv6 {
        this['address_netmask'] = addressNetmask;
        return this;
    }
    public set addressNetmask(addressNetmask: string  | undefined) {
        this['address_netmask'] = addressNetmask;
    }
    public get addressNetmask(): string | undefined {
        return this['address_netmask'];
    }
    public withDescription(description: string): AllowAddressNetmasksOptionIPv6 {
        this['description'] = description;
        return this;
    }
}