import { OcaIpVendor } from './OcaIpVendor';


export class OcaIpDevice {
    public type?: string;
    public model?: string;
    public vendor?: OcaIpVendor;
    public constructor() { 
    }
    public withType(type: string): OcaIpDevice {
        this['type'] = type;
        return this;
    }
    public withModel(model: string): OcaIpDevice {
        this['model'] = model;
        return this;
    }
    public withVendor(vendor: OcaIpVendor): OcaIpDevice {
        this['vendor'] = vendor;
        return this;
    }
}