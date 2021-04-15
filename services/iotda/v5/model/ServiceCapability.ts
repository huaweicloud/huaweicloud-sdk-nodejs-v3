import { ServiceCommand } from './ServiceCommand';
import { ServiceEvent } from './ServiceEvent';
import { ServiceProperty } from './ServiceProperty';


export class ServiceCapability {
    private 'service_id': string | undefined;
    private 'service_type': string | undefined;
    public properties?: Array<ServiceProperty>;
    public commands?: Array<ServiceCommand>;
    public events?: Array<ServiceEvent>;
    public description?: string;
    public option?: string;
    public constructor(serviceId?: any, serviceType?: any) { 
        this['service_id'] = serviceId;
        this['service_type'] = serviceType;
    }
    public withServiceId(serviceId: string): ServiceCapability {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId() {
        return this['service_id'];
    }
    public withServiceType(serviceType: string): ServiceCapability {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType() {
        return this['service_type'];
    }
    public withProperties(properties: Array<ServiceProperty>): ServiceCapability {
        this['properties'] = properties;
        return this;
    }
    public withCommands(commands: Array<ServiceCommand>): ServiceCapability {
        this['commands'] = commands;
        return this;
    }
    public withEvents(events: Array<ServiceEvent>): ServiceCapability {
        this['events'] = events;
        return this;
    }
    public withDescription(description: string): ServiceCapability {
        this['description'] = description;
        return this;
    }
    public withOption(option: string): ServiceCapability {
        this['option'] = option;
        return this;
    }
}