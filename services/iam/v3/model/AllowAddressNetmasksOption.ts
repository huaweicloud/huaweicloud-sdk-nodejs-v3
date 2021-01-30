

export class AllowAddressNetmasksOption {
    private 'address_netmask': string | undefined;
    public description?: string;
    public constructor(addressNetmask: any) { 
        this['address_netmask'] = addressNetmask;
    }
    public withAddressNetmask(addressNetmask: string): AllowAddressNetmasksOption {
        this['address_netmask'] = addressNetmask;
        return this;
    }
    public set addressNetmask(addressNetmask: string | undefined) {
        this['address_netmask'] = addressNetmask;
    }
    public get addressNetmask() {
        return this['address_netmask'];
    }
    public withDescription(description: string): AllowAddressNetmasksOption {
        this['description'] = description;
        return this;
    }
}