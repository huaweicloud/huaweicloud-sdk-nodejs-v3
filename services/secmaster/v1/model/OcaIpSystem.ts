import { OcaIpVendor } from './OcaIpVendor';


export class OcaIpSystem {
    public family?: string;
    public name?: string;
    public version?: string;
    public vendor?: OcaIpVendor;
    public constructor() { 
    }
    public withFamily(family: string): OcaIpSystem {
        this['family'] = family;
        return this;
    }
    public withName(name: string): OcaIpSystem {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): OcaIpSystem {
        this['version'] = version;
        return this;
    }
    public withVendor(vendor: OcaIpVendor): OcaIpSystem {
        this['vendor'] = vendor;
        return this;
    }
}