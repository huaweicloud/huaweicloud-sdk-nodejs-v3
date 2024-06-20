import { DeviceResource } from './DeviceResource';
import { PolicyResource } from './PolicyResource';


export class TemplateResource {
    public device?: DeviceResource;
    public policy?: PolicyResource;
    public constructor(device?: DeviceResource) { 
        this['device'] = device;
    }
    public withDevice(device: DeviceResource): TemplateResource {
        this['device'] = device;
        return this;
    }
    public withPolicy(policy: PolicyResource): TemplateResource {
        this['policy'] = policy;
        return this;
    }
}