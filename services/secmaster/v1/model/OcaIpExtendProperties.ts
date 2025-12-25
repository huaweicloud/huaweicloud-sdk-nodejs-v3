import { OcaIpDevice } from './OcaIpDevice';
import { OcaIpService } from './OcaIpService';
import { OcaIpSystem } from './OcaIpSystem';


export class OcaIpExtendProperties {
    public device?: OcaIpDevice;
    public system?: OcaIpSystem;
    public services?: Array<OcaIpService>;
    public constructor() { 
    }
    public withDevice(device: OcaIpDevice): OcaIpExtendProperties {
        this['device'] = device;
        return this;
    }
    public withSystem(system: OcaIpSystem): OcaIpExtendProperties {
        this['system'] = system;
        return this;
    }
    public withServices(services: Array<OcaIpService>): OcaIpExtendProperties {
        this['services'] = services;
        return this;
    }
}