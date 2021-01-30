

export class AllowAddressNetmasksResult {
    private 'address_netmask': string | undefined;
    public description: string;
    public constructor(addressNetmask: any, description: any) { 
        this['address_netmask'] = addressNetmask;
        this['description'] = description;
    }
    public withAddressNetmask(addressNetmask: string): AllowAddressNetmasksResult {
        this['address_netmask'] = addressNetmask;
        return this;
    }
    public set addressNetmask(addressNetmask: string | undefined) {
        this['address_netmask'] = addressNetmask;
    }
    public get addressNetmask() {
        return this['address_netmask'];
    }
    public withDescription(description: string): AllowAddressNetmasksResult {
        this['description'] = description;
        return this;
    }
}