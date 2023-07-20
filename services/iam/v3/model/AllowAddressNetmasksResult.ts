

export class AllowAddressNetmasksResult {
    private 'address_netmask'?: string;
    public description?: string;
    public constructor(addressNetmask?: string, description?: string) { 
        this['address_netmask'] = addressNetmask;
        this['description'] = description;
    }
    public withAddressNetmask(addressNetmask: string): AllowAddressNetmasksResult {
        this['address_netmask'] = addressNetmask;
        return this;
    }
    public set addressNetmask(addressNetmask: string  | undefined) {
        this['address_netmask'] = addressNetmask;
    }
    public get addressNetmask(): string | undefined {
        return this['address_netmask'];
    }
    public withDescription(description: string): AllowAddressNetmasksResult {
        this['description'] = description;
        return this;
    }
}