

export class VerityConnectivityReq {
    public address?: string;
    public constructor(address?: string) { 
        this['address'] = address;
    }
    public withAddress(address: string): VerityConnectivityReq {
        this['address'] = address;
        return this;
    }
}