

export class DecoyPortBasePortStruct {
    public port?: number;
    public protocol?: string;
    public constructor() { 
    }
    public withPort(port: number): DecoyPortBasePortStruct {
        this['port'] = port;
        return this;
    }
    public withProtocol(protocol: string): DecoyPortBasePortStruct {
        this['protocol'] = protocol;
        return this;
    }
}