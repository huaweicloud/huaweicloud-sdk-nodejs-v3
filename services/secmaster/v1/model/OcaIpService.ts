import { OcaIpVendor } from './OcaIpVendor';


export class OcaIpService {
    public port?: number;
    public protocol?: string;
    public name?: string;
    public version?: string;
    public vendor?: OcaIpVendor;
    public constructor() { 
    }
    public withPort(port: number): OcaIpService {
        this['port'] = port;
        return this;
    }
    public withProtocol(protocol: string): OcaIpService {
        this['protocol'] = protocol;
        return this;
    }
    public withName(name: string): OcaIpService {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): OcaIpService {
        this['version'] = version;
        return this;
    }
    public withVendor(vendor: OcaIpVendor): OcaIpService {
        this['vendor'] = vendor;
        return this;
    }
}