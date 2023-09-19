

export class AddressAndPorts {
    public address?: string;
    public port?: number;
    public constructor(address?: string) { 
        this['address'] = address;
    }
    public withAddress(address: string): AddressAndPorts {
        this['address'] = address;
        return this;
    }
    public withPort(port: number): AddressAndPorts {
        this['port'] = port;
        return this;
    }
}