

export class MasterFlavorSpec {
    public name?: string;
    public azs?: Array<string>;
    public azFaultDomains?: { [key: string]: Array<string>; };
    public constructor() { 
    }
    public withName(name: string): MasterFlavorSpec {
        this['name'] = name;
        return this;
    }
    public withAzs(azs: Array<string>): MasterFlavorSpec {
        this['azs'] = azs;
        return this;
    }
    public withAzFaultDomains(azFaultDomains: { [key: string]: Array<string>; }): MasterFlavorSpec {
        this['azFaultDomains'] = azFaultDomains;
        return this;
    }
}