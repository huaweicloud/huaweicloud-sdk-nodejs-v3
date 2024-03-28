

export class CreateConnectivityTaskRequestBody {
    public address?: string;
    public constructor(address?: string) { 
        this['address'] = address;
    }
    public withAddress(address: string): CreateConnectivityTaskRequestBody {
        this['address'] = address;
        return this;
    }
}