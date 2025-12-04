

export class Scanner {
    public name?: string;
    public vendor?: string;
    public version?: string;
    public constructor() { 
    }
    public withName(name: string): Scanner {
        this['name'] = name;
        return this;
    }
    public withVendor(vendor: string): Scanner {
        this['vendor'] = vendor;
        return this;
    }
    public withVersion(version: string): Scanner {
        this['version'] = version;
        return this;
    }
}