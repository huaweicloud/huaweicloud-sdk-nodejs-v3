

export class UpdateServerAddress {
    public version: number;
    public addr: string;
    public constructor(version?: any, addr?: any) { 
        this['version'] = version;
        this['addr'] = addr;
    }
    public withVersion(version: number): UpdateServerAddress {
        this['version'] = version;
        return this;
    }
    public withAddr(addr: string): UpdateServerAddress {
        this['addr'] = addr;
        return this;
    }
}